import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground,} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const ScreenEighteenButton = () => {
  const navigation = useNavigation();
  return (
    <View>
       <View style={styles.buttonEighteen}>
        <TouchableOpacity>
          <Text
            style={[
              styles.textSignEighteen,
              {
                color: '#246BFD',
              },
            ]}>
            How your username is used
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ScreenNineteen')}
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
              styles.textSignEighteen,
              {
                color: '#FFFFFF',
                fontWeight: '800',

                fontFamily: 'Lexend',
              },
            ]}>
            Create
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              marginTop: 5,

              color: '#667085',
            }}>
            Skip and auto generate username
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  buttonEighteen: {
    alignItems: 'center',
    marginTop: 420,
  },

  textSignEighteen: {
    fontSize: 18,

    color: '#FFFFFF',
  },
  
  });
export default ScreenEighteenButton