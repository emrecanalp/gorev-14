import { View, FlatList } from 'react-native';
import VisaCard from './VisaCard';

const DATA = [
  { id: '1', name: 'John Green', last4: '1234', expiry: '06/27' },
  { id: '2', name: 'John Green', last4: '5678', expiry: '10/28' },
];

export default function CardCarousel() {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToAlignment="start"
      decelerationRate="fast"
      snapToInterval={280 + 16} // cardWidth + gap
      ItemSeparatorComponent={() => <View className="w-4" />}
      renderItem={({ item }) => (
        <VisaCard
          holder={item.name}
          last4={item.last4}
          expiry={item.expiry}
        />
      )}
      contentContainerStyle={{ paddingHorizontal: 8 }}
    />
  );
}