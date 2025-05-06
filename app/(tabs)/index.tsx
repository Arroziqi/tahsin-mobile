import React from 'react';
import { StyleSheet, View } from 'react-native';
import NotLoginTopBar from '@/components/top-bar/NotLoginTopBar';
import Card from '@/components/card/Card';
import HomeContent from '@/contents/homeContent';
import colors from '@/constants/colors';
import ScrollScreen from '@/components/ScrollScreen';
import MediumButton from '@/components/button/MediumButton';
import { useRouter } from 'expo-router';

function Index() {
  const router = useRouter();

  return (
    <>
      <NotLoginTopBar />
      <ScrollScreen>
        <View style={styles.container}>
          <Card
            title={HomeContent[0].title}
            description={HomeContent[0].text}
            backgroundColor={colors.C06}
            titleStyle={{ color: colors.C04, textAlign: 'center' }}
            descriptionStyle={{ color: 'white' }}
            style={{ marginBottom: 5 }}
          />
          {HomeContent.map(
            (item, index) =>
              item.key !== 1 && (
                <Card
                  title={item.title}
                  description={item.text}
                  key={item.key}
                />
              ),
          )}
          <View style={styles.button}>
            <MediumButton
              text={'Gabung'}
              onPress={() =>
                router.navigate('/(course-management)/registration')
              }
            />
          </View>
        </View>
      </ScrollScreen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    gap: 18,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: -8,
  },
});

export default Index;
