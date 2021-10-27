import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { GOOGLE_MAPS_APIKEY } from "@env";
import {
  selectHomeAddress,
  selectWorkAddress,
  setHomeAddress,
  setWorkAddress,
} from "../slices/navSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";

const SetFavourites = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const homeAddress = useSelector(selectHomeAddress);
  const workAddress = useSelector(selectWorkAddress);

  return (
    <SafeAreaView>
      <Text style={tw`text-lg text-center font-bold text-gray-500 py-5`}>
        Home and Work
      </Text>

      <Image
        style={[
          { width: 120, height: 120, resizeMode: "contain" },
          tw`self-center -ml-5`,
        ]}
        source={{
          uri: "https://cdn0.iconfinder.com/data/icons/work-from-home-color-line/64/house-work-man-working-home-512.png",
        }}
      />

      <Text style={tw`text-xl text-center font-bold text-gray-500 py-5`}>
        Enter location of home and work
      </Text>
      <View style={tw`border-t border-gray-200 flex-shrink py-4`}>
        <GooglePlacesAutocomplete
          placeholder={`${
            homeAddress ? homeAddress.description : "Home Address"
          }`}
          nearbyPlacesAPI="GooglePlacesSearch"
          styles={toInputBoxStyles}
          enablePoweredByContainer={false}
          fetchDetails={true}
          returnKeyType={"search"}
          minLength={2}
          onPress={(data, details) => {
            dispatch(
              setHomeAddress({
                location: details.geometry.location,
                description: data.description,
              })
            );
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          debounce={400}
        />
      </View>
      <View style={tw` border-gray-200 flex-shrink`}>
        <GooglePlacesAutocomplete
          placeholder={`${
            workAddress ? workAddress.description : "Work Address"
          }`}
          nearbyPlacesAPI="GooglePlacesSearch"
          styles={toInputBoxStyles}
          enablePoweredByContainer={false}
          fetchDetails={true}
          returnKeyType={"search"}
          minLength={2}
          onPress={(data, details) => {
            dispatch(
              setWorkAddress({
                location: details.geometry.location,
                description: data.description,
              })
            );
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          debounce={400}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`my-3`}
        >
          <Text
            style={tw`text-center text-base bg-gray-300 rounded-lg px-3 py-2 self-center`}
          >
            Save changes
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SetFavourites;

const toInputBoxStyles = StyleSheet.create({
  container: {
    flex: 0,
  },

  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 7,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 15,
    paddingBottom: 0,
  },
});
