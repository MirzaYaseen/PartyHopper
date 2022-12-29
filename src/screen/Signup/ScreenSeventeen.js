import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {AppHeader} from '../../components';
import ScreenSeventeenButton from '../../constent/Buttons/ScreenSeventeenButton';
const ScreenSeventeen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
      <AppHeader />
      <Text
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 30,
          marginLeft: 20,
          marginTop: 30,
          color: 'black',
        }}>
        Verify your phone number
      </Text>
      <Text
        style={{
          width: 350,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 20,
          marginTop: 10,
          color: 'black',
        }}>
        Phone verification is required in order to activate your Party Hopper
        account.
      </Text>

      <Text
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20,
          marginLeft: 20,
          marginTop: 60,
          color: 'black',
        }}>
        Text Pin
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}>
        <TextInput
          style={{
            width: 60,
            borderWidth: 1,

            marginTop: 10,
            borderRadius: 10,
          }}
          keyboardType={'number-pad'}
        />

        <TextInput
          style={{
            width: 60,
            borderWidth: 1,

            marginTop: 10,
            borderRadius: 10,
          }}
          keyboardType={'number-pad'}
        />

        <TextInput
          style={{
            width: 60,
            borderWidth: 1,

            marginTop: 10,
            borderRadius: 10,
          }}
          keyboardType={'number-pad'}
        />

        <TextInput
          style={{
            width: 60,
            borderWidth: 1,

            marginTop: 10,
            borderRadius: 10,
          }}
          keyboardType={'number-pad'}
        />
      </View>
      <ScreenSeventeenButton/>

      {/* <View style={styles.button}>
        <TouchableOpacity>
          <Text
            style={[
              styles.textSign,
              {
                color: '#246BFD',
              },
            ]}>
            How your phone number is used
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ScreenEighteen')}
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
              styles.textSign,
              {
                color: '#FFFFFF',
                fontWeight: '800',

                fontFamily: 'Lexend',
              },
            ]}>
            Verify
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              marginTop: 5,

              color: '#667085',
            }}>
            Why can't I Skip?
          </Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text_footer: {
    alignSelf: 'center',
    color: '#667085',
    fontFamily: 'Lexend',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 10,
  },
  text_footera: {
    color: '#101828',
    fontSize: 35,
    fontFamily: 'Lexend',
    fontWeight: '700',
    marginTop: 10,
    width: '75%',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 130,
  },

  textSign: {
    fontSize: 18,

    color: '#FFFFFF',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
});

export default ScreenSeventeen;
