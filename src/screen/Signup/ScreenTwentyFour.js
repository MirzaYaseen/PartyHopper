import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {AppHeader} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';
import ScreenTwentyFourButton from '../../constent/Buttons/ScreenTwentyFourButton';
const ScreenTwentyFour = ({navigation}) => {
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
          fontWeight: '700',
          marginBottom: 10,
        }}>
        Add Profile Picture
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
        Add upto 3 profile pictures to your account.
      </Text>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 40,
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              borderRadius: 10,
              marginTop: 10,
              marginBottom: 10,
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Image
                source={require('../../images/user.png')}
                style={{
                  marginTop: 20,
                  marginLeft: 20,
                  marginRight: 20,
                  marginBottom: 20,

                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: 120,
                  height: 120,

                  position: 'relative',
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'blue',
              borderStyle: 'dashed',
              borderRadius: 10,
              marginLeft: 10,
              marginTop: 10,
              marginBottom: 10,
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Image
                source={require('../../images/plus.png')}
                style={{
                  marginTop: 60,
                  marginLeft: 60,
                  marginRight: 60,
                  marginBottom: 60,

                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: 30,
                  height: 30,

                  position: 'relative',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 20,
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'blue',
              borderStyle: 'dashed',
              borderRadius: 10,
              marginTop: 10,
              marginBottom: 10,
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Image
                source={require('../../images/plus.png')}
                style={{
                  marginTop: 60,
                  marginLeft: 60,
                  marginRight: 60,
                  marginBottom: 60,

                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: 30,
                  height: 30,

                  position: 'relative',
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'blue',
              borderStyle: 'dashed',
              borderRadius: 10,
              marginLeft: 10,
              marginTop: 10,
              marginBottom: 10,
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Image
                source={require('../../images/plus.png')}
                style={{
                  marginTop: 60,
                  marginLeft: 60,
                  marginRight: 60,
                  marginBottom: 60,

                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: 30,
                  height: 30,

                  position: 'relative',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <ScreenTwentyFourButton/>
{/* 
        <View style={styles.button}>
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
            onPress={() => navigation.navigate('ScreenTwentyFive')}
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
              Add
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                marginTop: 5,

                color: '#667085',
              }}>
              Proceed Without Adding
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
    marginTop: 40,
    marginBottom: 20,
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

export default ScreenTwentyFour;
