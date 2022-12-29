import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground,} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const ScreenFourteenButton = () => {
  const navigation = useNavigation();
  return (
    <View>
       <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 10,
          marginBottom: 10,
        }}>
        <TouchableOpacity>
          <Text style={{fontSize: 16, marginBottom: 5}}>Learn More</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ScreenFifteen')}
          style={{
            backgroundColor: '#246BFD',
            width: 350,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: '600'}}>
            Follow
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ScreenTen')}>
          <Text style={{fontSize: 16, marginTop: 5}}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  textSignFourteen: {
    fontSize: 18,

    color: '#FFFFFF',
  },
  buttonFourteen: {
    alignItems: 'center',
    marginTop: 80,
  },
  
  });
export default ScreenFourteenButton