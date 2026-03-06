import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { Image, Pressable, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import "../global.css";

const profile = require("../assets/images/crypto-user.png");

void SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      void SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (error) {
    throw error;
  }

  if (!loaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#09090b",
        },
        headerShadowVisible: false,
        headerTitle: "",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerLeft: () => (
            <View className="flex-row items-center ml-1">
              <View className="w-10 h-10 rounded-full overflow-hidden bg-[#16161d] border border-[#262634]">
                <Image source={profile} className="w-full h-full" />
              </View>
              <View className="ml-2">
                <Text className="text-white text-base" style={{ fontFamily: "SpaceMono" }}>
                  Wallet 1
                </Text>
                <Text className="text-[#8f90a2] text-xs">Main Wallet</Text>
              </View>
            </View>
          ),
          headerRight: () => (
            <View className="flex-row items-center mr-1">
              <Pressable 
                onPress={() => alert("Search")}
                className="w-10 h-10 rounded-full bg-[#15151d] border border-[#252534] mr-2 items-center justify-center active:opacity-70"
              >
                <Ionicons name="search" size={18} color="#d7d7e2" />
              </Pressable>
              <Pressable 
                onPress={() => alert("Scan QR")}
                className="w-10 h-10 rounded-full bg-[#15151d] border border-[#252534] items-center justify-center active:opacity-70"
              >
                <Ionicons name="scan-outline" size={18} color="#d7d7e2" />
              </Pressable>
            </View>
          ),
        }}
      />
    </Stack>
  );
}