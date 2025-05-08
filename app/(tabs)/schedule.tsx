import React from 'react';
import NavBackTopBar from '@/components/top-bar/NavBackTopBar';
import ScrollScreen from '@/components/ScrollScreen';
import { StyleSheet, View } from 'react-native';
import SearchBar from '@/components/search/SearchBar';
import SwitchButton from '@/components/button/SwitchButton';
import NavLink from '@/components/text/NavLink';
import { Feather } from '@expo/vector-icons';
import ScheduleCard from '@/components/card/ScheduleCard';
import colors from '@/constants/colors';

function Schedule() {
  return (
    <>
      <NavBackTopBar title={'Jadwal kelas'} />
      <ScrollScreen style={styles.container}>
        <SearchBar />
        <SwitchButton text1={'Minggu ini'} text2={'Hari ini'} />
        <View>
          <View style={styles.navContainer}>
            <NavLink
              text={'Minggu Lalu'}
              leadingIcon={<Feather name={'arrow-left'} />}
            />
            <NavLink
              text={'Minggu Depan'}
              trailingIcon={<Feather name={'arrow-right'} />}
            />
          </View>
          <View style={styles.icon}>
            <Feather name={'calendar'} size={17.45} color={colors.C06} />
          </View>
        </View>
        <ScheduleCard
          title={'Tahsin Dasar'}
          date={'5 Feb 2024'}
          time={'08.00-11.00'}
          location={'Via Zoom'}
          teacher={'Ustad Ahmad'}
        />
        <ScheduleCard
          title={'Tahsin Dasar'}
          date={'5 Feb 2024'}
          time={'08.00-11.00'}
          location={'Via Zoom'}
          teacher={'Ustad Ahmad'}
        />
      </ScrollScreen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    gap: 24,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: '#f0f5f5',
    borderWidth: 1,
    borderColor: colors['not-filled'],
    alignSelf: 'center',
  },
});

export default Schedule;
