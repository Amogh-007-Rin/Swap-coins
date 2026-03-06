import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const TokenCard = () => {
  return (
    <View className='w-full h-12 flex-row justify-start items-center'>
      <Text className='ml-4 text-xl text-white'>Tokens</Text>
      <View className='h-1/2 w-4 flex items-center justify-center'>
        <Ionicons name="chevron-forward" size={20} color="white"></Ionicons>
      </View>
    </View>
  )
}

export default TokenCard;