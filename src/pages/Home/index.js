import React from 'react';
import {Button, Text, View} from 'react-native';

export default function Home({navigation}) {
  return (
    <View>
      <Text>Home</Text>

      <Button
        title="Go"
        onPress={() => navigation.navigate('Services')}></Button>
    </View>
  );
}
