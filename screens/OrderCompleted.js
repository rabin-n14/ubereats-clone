import React, { useEffect, useState, useRef } from "react";
import { View, Text, SafeAreaView, ScrollView, Animated } from "react-native";
import { useSelector } from "react-redux";
import firebase from "../firebase";
import MenuItems from "../components/restaurantDetail/MenuItems";
import AnimatedLottieView from "lottie-react-native";
import LottieView from "lottie-react-native";

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Bologna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
      },
    ],
  });

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });

    return () => unsubscribe();
  }, []);

  const progress = useRef(new Animated.Value(0)).current;

  const handleAnimation = () => {
    Animated.loop(
      Animated.timing(progress, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: true,
      }),
      { iterations: -1 }
    ).start();
  };
  useEffect(() => {
    handleAnimation();
  }, [progress]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
        <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/confirm.json")}
          progress={progress}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your order at {restaurantName} has been placed for {totalUSD}
        </Text>
        <ScrollView>
          <MenuItems
            foods={lastOrder.items}
            hideCheckbox={true}
            marginLeft={10}
          />
        </ScrollView>
        <AnimatedLottieView
          style={{ height: 200, alignSelf: "center" }}
          source={require("../assets/animations/cooking.json")}
          progress={progress}
        />
      </View>
    </SafeAreaView>
  );
}
