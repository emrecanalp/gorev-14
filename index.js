// index.js — expo-router'dan ÖNCE çalışır

if (__DEV__) {
  const IGNORES = [
    'Could not access feature flag',
    'disableEventLoopOnBridgeLess',
    '[runtime not ready]',
  ];

  // LogBox'ı tamamen kapatmak istersen:
  // require('react-native').LogBox.ignoreAllLogs(true);

  const origError = console.error;
  console.error = (...args) => {
    const msg = args.map(String).join(' ');
    if (IGNORES.some((s) => msg.includes(s))) return; // gürültüyü yut
    origError(...args);
  };
}

// Asıl giriş: expo-router
import 'expo-router/entry';