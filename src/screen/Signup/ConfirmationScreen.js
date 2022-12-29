import {View, Text, Modal, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const ConfirmationScreen = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          width: 220,

          backgroundColor: 'white',
          alignSelf: 'center',
          marginTop: '50%',
          borderRadius: 30,
          display: 'flex',
        }}>
        <Image
          source={require('../../images/verified.png')}
          style={{
            marginLeft: '75%',
            top: -35,
            width: 85,
            height: 85,
          }}
        />

        <View>
          <Text
            style={{
              top: -40,
              marginLeft: 15,
              fontSize: 18,
              width: 100,
              marginTop: 10,
            }}>
            Muhammad Munir
          </Text>
          <Text
            style={{
              marginTop: 5,
              marginLeft: 15,
              top: -35,
              fontSize: 14,
              width: 180,
            }}>
            I'm a Software Engineer
          </Text>
          <Text
            style={{
              marginTop: 5,
              marginLeft: 15,
              marginBottom: 10,
              top: -15,
              width: 190,
            }}>
            I'm from COMSATS, Currently working on a project by name ---
          </Text>
        </View>
      </View>

      <TouchableOpacity
      onPress={()=>navigation.navigate('ScreenTwelve')}
        style={{
          marginTop: 30,
          backgroundColor: 'purple',
          width: 180,
          height: 40,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: '800'}}> Next </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmationScreen;
