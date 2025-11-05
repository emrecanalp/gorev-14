import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const actions = [
  { id: '1', title: 'Send\nFunds', icon: 'send' as const },
  { id: '2', title: 'Browse\nPeople', icon: 'users' as const },
  { id: '3', title: 'Get\nReports', icon: 'file-text' as const },
];

export default function QuickActions() {
  return (
    <View className="flex-row justify-between px-4 mt-4">
      {actions.map((a) => (
        <TouchableOpacity
          key={a.id}
          activeOpacity={0.8}
          className="w-[100px] h-[92px] rounded-2xl items-center justify-center bg-white shadow-sm"
        >
          <View className="w-12 h-12 items-center justify-center rounded-2xl bg-brand-100 mb-2">
            <Feather name={a.icon} size={20} color="#6976FF" />
          </View>

          <Text className="text-[12px] text-center text-textDark leading-4">
            {a.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}