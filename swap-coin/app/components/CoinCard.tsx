import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View, ActivityIndicator } from 'react-native';
import { Coin, getCoinData } from '../../scripts/getCoinData';

const CoinCard = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchList = async () => {
      const data = await getCoinData();
      setCoins(data);
      setLoading(false);
    };
    fetchList();
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

  return (
    <FlatList
      data={coins}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View className='flex-row justify-start items-center w-96 h-16 bg-[#29292b] m-1 rounded-2xl'>
          <View className='w-1/4 h-full bg-black flex justify-center items-center'>
            <Image source={{ uri: item.image }} className='w-12 h-12 rounded-full' />
          </View>
          <View className='flex justify-center items-center bg-blue-400 w-1/4 h-full'>
            <Text className='text-white'>{item.name}</Text>
            <Text className='text-white my-2'>0 {item.symbol.toUpperCase()}</Text>
          </View>
          <View className='w-14 h-full flex-col justify-center items-center rounded-2xl bg-green-400 mx-32'>
            <Text className='text-black text-xl'>$0.00</Text>
            <Text className='text-black -my-1'>$0.00</Text>
          </View>
        </View>
      )}
    />
  );
};

export default CoinCard;
