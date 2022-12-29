import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import {AppHeader} from '../../components';
import { Footer } from '../../components';
import ScreenEighteenButton from '../../constent/Buttons/ScreenEighteenButton';
const ScreenEighteen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
      <AppHeader />
      <ScrollView>
      <Text
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 30,
          marginLeft: 20,
          marginTop: 30,
          color: 'black',
        }}>
        Create a Username
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
        Create your unique username to be used with your account
      </Text>
        <ScreenEighteenButton/>
      {/* <View style={styles.button}>
        <TouchableOpacity>
          <Text
            style={[
              styles.textSign,
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
              styles.textSign,
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
      </View> */}
      </ScrollView>
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
    marginTop: 420,
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

export default ScreenEighteen;
