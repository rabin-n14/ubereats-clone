import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://img.delicious.com.au/n6d0eFUI/w759-h506-cfill/del/2020/02/vue-de-monde-126574-1.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "The Stars and Moon",
    image_url:
      "https://www.dmarge.com/wp-content/uploads/2016/12/eureka-960x580.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "Indian Grills",
    image_url:
      "https://www.madeinindia.net.au/wp-content/uploads/2017/11/DESI_DHABA-650x325.jpg",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.9,
  },
];

export default function RestaurantItems(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {props.restaurantData.map((restaurant, index) => (
        <View
          key={index}
          style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
        >
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        url: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 · min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
