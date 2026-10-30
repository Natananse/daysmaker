import { Tabs } from 'expo-router';
import { Text } from 'react-native';

function TabIcon({ symbol, focused }) {
  return (
    <Text style={{ color: focused ? '#7f4141' : '#7d746d', fontSize: 19, fontWeight: '700' }}>
      {symbol}
    </Text>
  );
}

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#7f4141',
        tabBarInactiveTintColor: '#7d746d',
        tabBarStyle: { backgroundColor: '#fffaf4', borderTopColor: 'rgba(127,65,65,0.16)' },
        tabBarLabelStyle: { fontWeight: '600' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: 'Home', tabBarIcon: ({ focused }) => <TabIcon symbol="⌂" focused={focused} /> }}
      />
      <Tabs.Screen
        name="focus"
        options={{ title: 'Focus', tabBarIcon: ({ focused }) => <TabIcon symbol="◷" focused={focused} /> }}
      />
    </Tabs>
  );
}
