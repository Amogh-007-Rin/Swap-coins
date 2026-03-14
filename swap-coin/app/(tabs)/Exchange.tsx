import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const Exchange = () => {
  const [payAmount, setPayAmount] = useState("");
  const [recieveAmount, setRecieveAmount] = useState("");

  return (
    <View className='bg-[#08080d] w-full h-full items-center'>
      <View className='w-3/4 my-4'>
        <TextInput className='h-20 w-full bg-[#11111a] text-white rounded-2xl border border-gray-400' placeholder='You Pay' placeholderTextColor='gray' onChangeText={setPayAmount} value={payAmount} keyboardType='numeric'/>
        <TextInput className='h-20 w-full  bg-[#11111a] text-white border border-gray-400 my-2 rounded-2xl' placeholder='You Recieve' placeholderTextColor="gray"  onChangeText={setRecieveAmount} value={recieveAmount} keyboardType='numeric'/>
      </View>
    </View>
  )
}

export default Exchange;