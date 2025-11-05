import '../global.css';
import { Stack } from 'expo-router';
import { LogBox } from 'react-native';

// ⚠️ Hermes "feature flag" geliştirme uyarısını kapat
if (__DEV__) {
  LogBox.ignoreLogs([
    'Could not access feature flag',
    'disableEventLoopOnBridgeLess',
    '[runtime not ready]',
  ]);

  const originalError = console.error;
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('Could not access feature flag') ||
       args[0].includes('disableEventLoopOnBridgeLess') ||
       args[0].includes('[runtime not ready]'))
    ) {
      return;
    }
    originalError(...args);
  };
}

export default function RootLayout() {
  return <Stack />;
}