import { View } from 'react-native';

import { Link } from 'expo-router';


export default function Index() {
  return (
    <View>
      <Link href="/about">About</Link>
    </View>
  );
}
