import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
import React from 'react';
import {AppHeader} from '../../components';
import ScreenTwentyButton from '../../constent/Buttons/ScreenTwentyButton';
const ScreenTwenty = ({navigation}) => {
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
        Create A Bio
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
        Create your Bio own unique biography to display to others.
      </Text>

      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          color: 'black',
        }}>
        Please remember to create your biography within our
        <TouchableOpacity>
          <Text style={{color: 'blue'}}>Terms of Services</Text>
        </TouchableOpacity>
      </Text>

      <ScreenTwentyButton/>

      {/* <View style={styles.button}>
        <TouchableOpacity>
          <Text
            style={[
              styles.textSign,
              {
                color: '#246BFD',
              },
            ]}>
            Learn More
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ScreenTwentyOne')}
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
            Skip
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

export default ScreenTwenty;
