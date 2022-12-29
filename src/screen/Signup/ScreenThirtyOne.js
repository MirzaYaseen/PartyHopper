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
import ScreenThirtyOneButton from '../../constent/Buttons/ScreenThirtyOneButton';

const ScreenThirtyOne = ({navigation}) => {
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
            fontWeight: '700',
            marginBottom: 10,
          }}>
          Are You Joining A Party Or Event?
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
          Your account setup is finished. If you joined Party Hopper to attend
          an event or party you can now request to join.
        </Text>

        <ScreenThirtyOneButton />

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
    marginTop: 380,
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

export default ScreenThirtyOne;
