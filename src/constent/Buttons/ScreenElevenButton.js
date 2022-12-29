import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground,} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const ScreenElevenButton = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>ScreenElevenButton</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  textSignEleven: {
    fontSize: 18,

    color: '#FFFFFF',
  },
  buttonEleven: {
    alignItems: 'center',
    marginTop: 80,
  },
  
  });
export default ScreenElevenButton