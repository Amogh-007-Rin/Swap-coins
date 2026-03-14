import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

const Exchange = () => {
  const [payAmount, setPayAmount] = useState("");
  const [recieveAmount, setRecieveAmount] = useState("");

  return (
    <View className='bg-[#08080d] w-full h-full items-center'>
      <View className='w-[90%] h-32 my-4 bg-[#11111a] rounded-2xl border border-gray-400 p-3'>
        <View className='w-full h-1/3 my-1 bg-blue-300'><Text className='text-white'>You Pay</Text></View>
        <View className='flex-row w-full justify-between bg-red-400'>
          <TextInput className='w-1/2 bg-[#11111a] text-white ' placeholder='0' placeholderTextColor='gray' onChangeText={setPayAmount} value={payAmount} keyboardType='numeric'/>
          <View className='w-1/2 flex items-center justify-center p-1'>
            <Pressable className='w-2/3 bg-orange-800 justify-center items-center p-2 rounded-2xl'><Text className='text-white text-center'>Coins</Text></Pressable>
          </View>
        </View>
        <View className='flex-row w-full justify-between bg-yellow-400'>
          <Pressable><Text className='text-white'>Reverse</Text></Pressable>
          <Text className='text-white'>0 SOL</Text>
        </View> 
      </View>
      <View className='w-[90%] h-32 my-4 bg-[#11111a] rounded-2xl border border-gray-400 p-3'>
        <View className='w-full h-1/3 my-1 bg-blue-300'><Text className='text-white'>You Recieve</Text></View>
        <View className='flex-row w-full justify-between bg-red-400'>
          <TextInput className='w-1/2 bg-[#11111a] text-white ' placeholder='0' placeholderTextColor='gray' onChangeText={setRecieveAmount} value={recieveAmount} keyboardType='numeric'/>
          <View className='w-1/2 flex items-center justify-center p-1'>
            <Pressable className='w-2/3 bg-orange-800 justify-center items-center p-2 rounded-2xl'><Text className='text-white text-center'>Coins</Text></Pressable>
          </View>
        </View>
        <View className='flex-row w-full justify-between bg-yellow-400'>
          <Pressable><Text className='text-white'>Reverse</Text></Pressable>
          <Text className='text-white'>0 SOL</Text>
        </View> 
      </View>
    </View>
  )
}

export default Exchange;


        // <TextInput className='h-32 w-full  bg-[#11111a] text-white border border-gray-400 my-2 rounded-2xl' placeholder='You Recieve' placeholderTextColor="gray"  onChangeText={setRecieveAmount} value={recieveAmount} keyboardType='numeric'/>