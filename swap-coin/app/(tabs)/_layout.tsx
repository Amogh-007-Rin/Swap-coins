import { View, Text, Image, Pressable } from 'react-native';
import React, { useEffect } from 'react';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const profile = require("../../assets/images/crypto-user.png");

export default function RootLayoutTab() {
    const [loaded, error] = useFonts({
        SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#7f89ff",
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#08080d',
                    borderTopWidth: 0,
                    borderTopColor: "#08080d", // Subtle dark border
                    height: 65,
                    elevation: 0,
                    paddingTop: 10,
                    paddingBottom: 10
                },
                tabBarItemStyle: {
                    margin: 0,
                    paddingHorizontal: 0,
                },
                headerStyle: {
                    backgroundColor: "#09090b",
                },
                headerShadowVisible: false,
                headerTitle: "",
                // Move your custom header logic here so it applies to the screens
                headerLeft: () => (
                    <View className="flex-row items-center ml-4">
                        <View className="w-10 h-10 rounded-full overflow-hidden bg-[#16161d] border border-[#262634]">
                            <Image source={profile} className="w-full h-full" />
                        </View>
                        <View className="ml-2">
                            <Text className="text-white text-base" style={{ fontFamily: "SpaceMono" }}>
                                Amogh Dath
                            </Text>
                            <Text className="text-[#8f90a2] text-xs">Account 1</Text>
                        </View>
                    </View>
                ),
                headerRight: () => (
                    <View className="flex-row items-center mr-4">
                        <Pressable
                            onPress={() => alert("History")}
                            className="w-10 h-10 rounded-full bg-[#15151d] border border-[#252534] items-center justify-center active:opacity-70"
                        >
                            <Ionicons name="time" size={20} color="#d7d7e2" />
                        </Pressable>
                        <Pressable
                            onPress={() => alert("Search")}
                            className="w-10 h-10 rounded-full bg-[#15151d] border border-[#252534] ml-2 items-center justify-center active:opacity-70"
                        >
                            <Ionicons name="search" size={20} color="#d7d7e2" />
                        </Pressable>
                    </View>
                ),
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="Deposit"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="card-outline" color={color} />,
                }}
            />
            <Tabs.Screen
                name="Exchange"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="swap-horizontal" color={color} />,
                }}
            />
            <Tabs.Screen
                name="Chat"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="chatbox-ellipses" color={color} />,
                }}
            />
            <Tabs.Screen
                name="Search"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="search" color={color} />,
                }}
            />
        </Tabs>
    );
}