import { View, Text } from 'react-native'
import React from 'react'
import BuyButton from './buyButton'
import DepositeButton from './depositeButton'

const buttonCard = () => {
  return (
    <View className=''>
      <BuyButton></BuyButton>
      <DepositeButton></DepositeButton>
    </View>
  )
}

export default buttonCard