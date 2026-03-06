import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons"
import type { OpaqueColorValue } from 'react-native';


type SwapButtonsProps = {
    lable: string,
    name: keyof typeof Ionicons.glyphMap,
    iconColor: string | OpaqueColorValue | undefined
};


const swapButtons = ({lable, name, iconColor}: SwapButtonsProps) => {
  return (
    <View className='flex justify-center items-center w-20 h-20 bg-[#29292b] rounded-2xl'>
      <Pressable className='w-full h-full flex justify-center items-center rounded-2xl' onPress={alert}>
        <Ionicons name={name} size={28} color={iconColor}></Ionicons>
        <Text className='text-white'>{lable}</Text>
      </Pressable>
    </View>
  )
}

export default swapButtons;