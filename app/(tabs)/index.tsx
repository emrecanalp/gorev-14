import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView } from 'react-native';
import Header from '../../components/Header';
import CardCarousel from '../../components/CardCarousel';
import CurrencyRow from '../../components/CurrencyRow';
import QuickActions from '../../components/QuickActions';
import Section from '../../components/Section';

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-[#F3F4F6]">
      <StatusBar style="dark" />
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 28 }}
        showsVerticalScrollIndicator={false}
      >
        <Header />

        {/* Cards */}
        <View className="px-4 mt-3">
          <CardCarousel />
        </View>

        {/* Divider */}
        <View className="h-[12px]" />

        {/* Currency / Balance */}
        <Section title="Accounts">
          <CurrencyRow
            flag="🇺🇸"
            code="USD"
            value="15,402.01"
            iban="LT12 **** **** 1010"
          />
        </Section>

        {/* Quick Actions */}
        <Section title="Quick Actions">
          <QuickActions />
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
}