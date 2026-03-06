import { Stack } from "expo-router";
import { Image, Pressable, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import "../global.css";

const profile = require("../assets/images/crypto-user.png");

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#131313', // Deep Phantom background
        },
        headerShadowVisible: false, // Removes the bottom border/line
        headerTitle: "", // We use headerLeft for the profile instead of a title
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          // --- LEFT SIDE: Profile & Wallet Name ---
          headerLeft: () => (
            <View className="flex-row items-center ml-2">
              <View className="w-10 h-10 rounded-full overflow-hidden bg-gray-800 border border-gray-700">
                <Image source={profile} className="w-full h-full" />
              </View>
              <View className="ml-3">
                <Text className="text-white font-bold text-lg">Wallet 1</Text>
              </View>
            </View>
          ),
          // --- RIGHT SIDE: Search and Scan ---
          headerRight: () => (
            <View className="flex-row items-center mr-2">
              <Pressable 
                onPress={() => alert('Search')} 
                className="p-2 mr-1 active:opacity-50"
              >
                <Ionicons name="search" size={24} color="white" />
              </Pressable>
              <Pressable 
                onPress={() => alert('Scan QR')} 
                className="p-2 active:opacity-50"
              >
                <Ionicons name="qr-code-outline" size={24} color="white" />
              </Pressable>
            </View>
          ),
        }}
      />
    </Stack>
  );
}