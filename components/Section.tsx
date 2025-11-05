import React, { PropsWithChildren } from 'react'; // ← BURADAN
import { View, Text } from 'react-native';

type SectionProps = PropsWithChildren<{ title: string }>;

export default function Section({ title, children }: SectionProps) {
  return (
    <View className="mt-4">
      <Text className="px-4 mb-2 text-[16px] font-semibold text-textDark">
        {title}
      </Text>
      {children}
    </View>
  );
}