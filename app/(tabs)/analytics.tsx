import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';

export default function Screen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#F3F4F6]">
      <Text className="text-textLight">Coming soon…</Text>
    </SafeAreaView>
  );
}