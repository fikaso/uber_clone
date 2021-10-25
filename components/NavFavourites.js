import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Nova Dalmacija, Josipovac, Hrvatska",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "Zupanijska 21, Osijek, Hrvatska",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { icon, location, destination } }) => (
        <TouchableOpacity style={tw`flex-row items-center px-3 py-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View style={tw`flex-1`}>
            <Text style={tw`font-bold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
