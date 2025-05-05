import React from 'react';
import { Text } from 'react-native';
import Screen from '@/components/Screen';
import NotLoginTopBar from '@/components/top-bar/NotLoginTopBar';

function Index() {
  return (
    <Screen>
      <NotLoginTopBar />
      <Text>Ini index</Text>
    </Screen>
  );
}

export default Index;
