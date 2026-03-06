import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View, ActivityIndicator } from 'react-native';
import { getCoinData } from '../../scripts/getCoinData';

const CoinCard = () => {
  const [coins, setCoins] = useState([]);
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
        <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
          <Image source={{ uri: item.image }} style={{ width: 30, height: 30, marginRight: 10 }} />
          <Text>{item.name} ({item.symbol.toUpperCase()})</Text>
        </View>
      )}
    />
  );
};

export default CoinCard;
