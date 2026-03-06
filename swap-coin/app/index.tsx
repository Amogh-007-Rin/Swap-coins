import React, { useEffect, useRef } from "react";
import { Animated, ScrollView, View } from "react-native";
import "../global.css";
import WelcomeCard from "./components/welcomeCard";
import ButtonCard from "./components/buttonCard";
import SwapButtons from "./components/swapButtons";
import TokenCard from "./components/TokenCard";
import CoinCard from "./components/CoinCard";

export default function Index() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(16)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  return (
    <View className="flex-1 bg-[#08080d]">
      <View className="absolute -top-16 -left-12 w-56 h-56 rounded-full bg-[#2b2148] opacity-45" />
      <View className="absolute top-44 -right-12 w-52 h-52 rounded-full bg-[#152447] opacity-50" />

      <Animated.View
        style={{
          flex: 1,
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        }}
      >
        <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 28 }}>
            <WelcomeCard />
            <ButtonCard />

          <View className="w-full px-4 mt-2 flex-row justify-between">
            <SwapButtons lable="Send" name="paper-plane-outline" iconColor="#7f89ff" />
            <SwapButtons lable="Swap" name="swap-vertical" iconColor="#7f89ff" />
            <SwapButtons lable="Receive" name="scan-outline" iconColor="#7f89ff" />
            <SwapButtons lable="Buy" name="card-outline" iconColor="#7f89ff" />
          </View>

          <TokenCard />

          <View className="px-4">
            <CoinCard />
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
}
