import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {Colors} from '../constent/Colors';
import {HeaderImage} from '../constent/AppHeaderImage';
const AppHeader = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <Image source={HeaderImage.right} />
      </View>
      <View style={styles.left}>
        <Image source={HeaderImage.left} />
      </View>
    </SafeAreaView>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.BgColor,
  },
  left: {
    borderWidth: 2,
    borderColor: '#D0D5DD',
    borderRadius: 10,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
