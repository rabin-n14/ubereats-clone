import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem() {
  return (
    <View>
      <RestaurantImage />
    </View>
  );
}

const RestaurantImage = () => (
  <>
    <Image
      source={{
        url: "https://img.delicious.com.au/n6d0eFUI/w759-h506-cfill/del/2020/02/vue-de-monde-126574-1.jpg",
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);
