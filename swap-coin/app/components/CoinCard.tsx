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
        <View className='flex-row justify-start items-center w-96 h-20 bg-[#29292b] m-2 rounded-2xl'>
          <View className='w-1/4 h-full flex justify-center items-center'>
            <Image source={{ uri: item.image }} className='w-12 h-12 rounded-full' />
          </View>
          <View className='flex justify-center items-center w-1/4 h-full'>
            <Text className='text-white text-xl'>{item.name}</Text>
            <Text className='text-white my-2'>0 {item.symbol.toUpperCase()}</Text>
          </View>
          <View className='w-20 h-full flex-col justify-center items-center rounded-2xl mx-28'>
            <Text className='text-white text-xl -my-1'>$0.00</Text>
            <Text className='text-white text-sm'>$0.00</Text>
          </View>
        </View>
      )}
    />
  );
};

export default CoinCard;
