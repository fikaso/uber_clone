import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";
import { selectOrigin } from "../slices/navSlice";
import { useSelector } from "react-redux";

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <View style={tw`flex-row`}>
      <TouchableOpacity
        onPress={() => navigation.navigate("MapScreen")}
        style={tw`p-1 pl-6 pb-8 pt-4 bg-gray-200 m-1 w-40`}
        disabled={!origin}
      >
        <View style={tw`${!origin && `opacity-20`}`}>
          <Image
            style={{ width: 120, height: 120, resizeMode: "contain" }}
            source={{
              uri: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
            }}
          />
          <Text style={tw`mt-2 text-lg font-semibold`}>Get a ride</Text>
          <Icon
            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
            name="arrowright"
            color="white"
            type="antdesign"
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("EatScreen")}
        style={tw`p-1 pl-6 pb-8 pt-4 bg-gray-200 m-1 w-40`}
        disabled={true}
      >
        <View style={tw`opacity-20`}>
          <Image
            style={{ width: 120, height: 120, resizeMode: "contain" }}
            source={{
              uri: "https://i.pinimg.com/originals/4f/eb/74/4feb745209cf7aba57463b20d27b61e3.png",
            }}
          />
          <Text style={tw`mt-2 text-lg font-semibold`}>Order food</Text>
          <Icon
            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
            name="arrowright"
            color="white"
            type="antdesign"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NavOptions;
