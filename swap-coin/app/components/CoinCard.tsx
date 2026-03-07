import React, { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { Coin, getCoinData } from "../../scripts/getCoinData";

const HOLDINGS: Record<string, number> = {
  sol: 42.5,
  eth: 1.82,
  btc: 0.08,
  xrp: 210.35,
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: value >= 1000 ? 0 : 2,
  }).format(value);

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

  const visibleCoins = useMemo(() => {
    if (!coins.length) {
      return [];
    }

    const priority = ["solana", "ethereum", "bitcoin", "ripple"];
    const sorted = [...coins].sort(
      (a, b) => priority.indexOf(a.id) - priority.indexOf(b.id)
    );
    return sorted.slice(0, 20);
  }, [coins]);

  if (loading) {
    return (
      <View className="h-40 items-center justify-center">
        <ActivityIndicator size="large" color="#7f89ff" />
      </View>
    );
  }

  return (
    <FlatList
      data={visibleCoins}
      keyExtractor={(item) => item.id}
      scrollEnabled={false}
      ItemSeparatorComponent={() => <View className="h-2" />}
      renderItem={({ item }) => (
        <View className="w-full h-20  bg-[#11111a] rounded-2xl border border-[#212132] flex-row items-center px-3 py-3">
          <View className="w-14 h-14 bg-[#171727] rounded-full items-center justify-center">
            <Image source={{ uri: item.image }} className="w-12 h-12 rounded-full" />
          </View>

          <View className="flex-1 ml-2 h-full justify-center">
            <Text className="text-white text-[15px]" style={{ fontFamily: "SpaceMono" }}>
              {item.symbol.toUpperCase()}
            </Text>
            <Text className="text-[#8f90a2] text-xs">{item.name}</Text>
          </View>

          <View className=" w-28 h-full items-end justify-center">
            <Text className="text-white text-sm text-center">
              {formatCurrency((HOLDINGS[item.symbol] ?? 0) * item.current_price)}
            </Text>
            <Text className="text-[#8f90a2] text-xs text-center">
              {(HOLDINGS[item.symbol] ?? 0).toFixed(2)}
            </Text>
          </View>

          <View className="ml-3 rounded-lg px-2 py-1 flex justify-center items-center bg-[#1a1a26]">
            <Text
              className={`text-xs text-center ${
                item.price_change_percentage_24h >= 0 ? "text-[#6affbc]" : "text-[#ff7d9a]"
              }`}
            >
              {item.price_change_percentage_24h >= 0 ? "+" : ""}
              {item.price_change_percentage_24h.toFixed(2)}%
            </Text>
          </View>
        </View>
      )}
      ListEmptyComponent={
        <View className="h-20 rounded-2xl border border-[#222236] bg-[#11111a] items-center justify-center">
          <Text className="text-[#8f90a2]">No token data available</Text>
        </View>
      }
    />
  );
};

export default CoinCard;
