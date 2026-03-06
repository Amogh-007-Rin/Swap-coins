import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const depositeButton = () => {
  return (
          <View className='flex justify-center items-center w-full h-10 my-4'>
              <View className='flex justify-center items-center w-96 h-12 bg-[#29292b] rounded-xl'>
                  <TouchableOpacity onPress={alert} className='w-full h-full flex justify-center items-center'><Text className='text-white'>Deposite Crypto</Text></TouchableOpacity>
              </View>
          </View>
      )
}

export default depositeButton;