import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground,} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const ScreenThirtyOneButton = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.buttonThirtyOne}>
        <TouchableOpacity>
          <Text
            style={[
              styles.textSignThirtyOne,
              {
                color: '#246BFD',
              },
            ]}>
            Join Party or event
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ScreenEight')}
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
              styles.textSignThirtyOne,
              {
                color: '#FFFFFF',
                fontWeight: '800',

                fontFamily: 'Lexend',
              },
            ]}>
            Skip
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              marginTop: 5,

              color: '#667085',
            }}>
            Create your Own
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  textSignThirtyOne: {
    fontSize: 18,

    color: '#FFFFFF',
  },
  buttonThirtyOne: {
    alignItems: 'center',
    marginTop: 380,
  },
  
  });
export default ScreenThirtyOneButton