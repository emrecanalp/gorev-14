import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

type Props = {
  flag: string;
  code: string;
  value: string;
  iban: string;
};

export default function CurrencyRow({ flag, code, value, iban }: Props) {
  return (
    <View className="bg-white rounded-2xl mx-4 px-4 py-3 shadow-sm">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center space-x-2">
          <Text className="text-xl">{flag}</Text>
          <Text className="text-[15px] font-medium text-textDark">{code}</Text>
        </View>

        <Text className="text-[15px] font-semibold text-success">{value}</Text>
      </View>

      <View className="h-[1px] bg-gray-100 my-3" />

      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-[12px] text-textLight">IBAN</Text>
          <Text className="text-[13px] text-textDark">{iban}</Text>
        </View>
        <Feather name="chevron-right" size={20} color="#9CA3AF" />
      </View>
    </View>
  );
}