import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {AppHeader} from '../../components';
import ButtonFour from '../../constent/Buttons/ButtonFour';
//   import * as Progress from 'react-native-progress';
const ScreenFour = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
      <ScrollView>
        {/* <Progress.Bar progress={0.3} width={200} /> */}
        <View>
          <Text
            style={{
              marginTop: 30,
              marginLeft: 15,
              fontSize: 25,
              fontWeight: '600',
              color: '#101828',
            }}>
            Completed
          </Text>
          <View
            style={{
              backgroundColor: '#DCEAFF',
              marginTop: 10,
              width: '95%',
              height: 30,
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 20,
            }}>
            <View
              style={{
                width: 120,
                height: 30,
                backgroundColor: '#246BFD',
                borderRadius: 20,
              }}>
              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  fontSize:20,
                  fontWeight:'800',
                  color:'#FFFFFF'
                }}>
                {'15%'}
              </Text>
            </View>
          </View>
        </View>

        <Text
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 370,
            fontSize: 35,
            marginLeft: 20,
            marginTop: 50,
            color: 'black',
            fontWeight: '700',
            marginBottom: 10,
            fontFamily: 'Lexend',
          }}>
          Party HopperConnects With Snapchat
        </Text>
        <Text
          style={{
            width: 350,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 20,
            marginTop: 15,
            color: '#667085',
            fontSize: 20,
          }}>
          Sync your display name and BitMoji to Party Hopper
        </Text>

        <ButtonFour />
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
                onPress={() => navigation.navigate('ScreenTwentyEight')}
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
                  Continue
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 18,
                    marginTop: 5,
      
                    color: '#667085',
                  }}>
                  Next
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
    marginTop: 270,
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

export default ScreenFour;
