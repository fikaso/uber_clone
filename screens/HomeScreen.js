import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { setDestination, setOrigin } from "../slices/navSlice";
import { useDispatch } from "react-redux";
import tw from "tailwind-react-native-classnames";
import NavFavourites from "../components/NavFavourites";
import SafeViewAndroid from "../SafeViewAndroid";

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView
      style={[tw`bg-white h-full`, SafeViewAndroid.AndroidSafeArea]}
    >
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />

        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          returnKeyType={"search"}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          debounce={400}
          placeholder="Where From?"
        />
        <NavOptions />

        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
