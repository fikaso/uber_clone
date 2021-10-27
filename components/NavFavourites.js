import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/core";
import { useSelector } from "react-redux";
import { selectHomeAddress, selectWorkAddress } from "../slices/navSlice";

const NavFavourites = ({ setSelected }) => {
  const homeAddress = useSelector(selectHomeAddress);
  const workAddress = useSelector(selectWorkAddress);
  const navigation = useNavigation();

  return (
    <View>
      <View style={tw`flex-row items-center`}>
        <TouchableOpacity
          onPress={() => {
            if (homeAddress) {
              setSelected(homeAddress);
            }
          }}
          style={tw`flex-1 flex-row items-center p-3`}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name="home"
            type="ionicon"
            color="white"
            size={18}
          />
          <View style={tw`flex-1`}>
            <Text style={tw`font-bold text-lg`}>Home</Text>
            {homeAddress && (
              <Text style={tw`text-gray-500`}>{homeAddress.description}</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
      <View style={tw`flex-row items-center`}>
        <TouchableOpacity
          onPress={() => {
            if (workAddress) {
              setSelected(workAddress);
            }
          }}
          style={tw`flex-1 flex-row items-center px-3 py-5`}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name="briefcase"
            type="ionicon"
            color="white"
            size={18}
          />
          <View style={tw`flex-1`}>
            <Text style={tw`font-bold text-lg`}>Work</Text>
            {workAddress && (
              <Text style={tw`text-gray-500`}>{workAddress.description}</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("SetFavourites")}>
        <Text
          style={tw`text-center text-sm bg-gray-300 rounded-full p-3 self-center`}
        >
          Set Home and Work location
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
