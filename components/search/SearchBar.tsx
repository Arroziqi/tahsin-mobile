import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from '@/constants/colors';

function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={[styles.bar, styles.searchBar]}>
        <TextInput placeholder="Cari kelas..." style={styles.search} />
      </View>
      <View style={[styles.bar, styles.filter]}>
        <Feather name={'filter'} size={24} color={colors.C06} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 14,
    width: '100%',
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    width: 90,
    paddingHorizontal: 6,
  },
  search: {
    width: '100%',
    fontSize: 12,
  },
  filter: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
  },
  bar: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors['not-filled'],
  },
});

export default SearchBar;
