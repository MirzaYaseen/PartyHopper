import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const ScreenThirtyButton = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.buttonThirty}>
          <TouchableOpacity>
            <Text
              style={[
                styles.textSignThirty,
                {
                  color: '#246BFD',
                },
              ]}>
              How your gender is used
            </Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => navigation.navigate('ScreenThirtyOne')}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '98%',
              height: 60,
              marginTop: 10,
              backgroundColor: '#246BFD',
              borderRadius: 10,
            }}>
            <Text
              style={[
                styles.textSignThirty,
                {
                  color: '#FFFFFF',
                  fontWeight: '800',
  
                  fontFamily: 'Lexend',
                },
              ]}>
              Continue
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                marginTop: 5,
  
                color: '#667085',
              }}>
              Why Can't I skip?
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  textSignThirty: {
    fontSize: 18,

    color: '#FFFFFF',
  },
  buttonThirty: {
    alignItems: 'center',
    marginTop: 190,
  },
  
  });
export default ScreenThirtyButton