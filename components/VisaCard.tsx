import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  holder: string;
  last4: string;
  expiry: string;
};

export default function VisaCard({ holder, last4, expiry }: Props) {
  return (
    <LinearGradient
      colors={["#5E4BFF", "#3D2DF4"]}
      start={{ x: 0.1, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ borderRadius: 20 }}
    >
      <View className="w-[280px] h-[170px] rounded-2xl p-5 justify-between">
        <Text className="text-white text-[20px] font-semibold">VISA</Text>
        <View>
          <Text className="text-white/90 tracking-widest mb-2">**** **** **** {last4}</Text>
          <View className="flex-row justify-between">
            <View>
              <Text className="text-white/70 text-[11px]">Card Holder Name</Text>
              <Text className="text-white text-[13px] font-medium">{holder}</Text>
            </View>
            <View className="items-end">
              <Text className="text-white/70 text-[11px]">Expiry Date</Text>
              <Text className="text-white text-[13px] font-medium">{expiry}</Text>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}