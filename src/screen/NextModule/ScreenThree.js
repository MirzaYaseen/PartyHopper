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
import ButtonThree from '../../constent/Buttons/ButtonThree';
const ScreenThree = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
      <ScrollView>
        <View>
          <Image
            source={require('../../images/Picture19.png')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 40,
              alignSelf: 'center',
              marginLeft: 15,
              marginTop: 30,

              marginRight: 15,
              width: 270,
              height: 200,
              borderWidth: 4,
              borderColor: '#246BFD',
            }}
          />
        </View>

        <Text
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 250,
            fontSize: 35,
            marginLeft: 20,
            marginTop: 30,
            color: 'black',
            fontWeight: '700',
            marginBottom: 10,
            fontFamily: 'Lexend',
          }}>
          Join Jack0-Lantern
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
       Quickly create your Party Hopper account to gain access to Jack0-Lantern
        </Text>

        

        <ButtonThree  />
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

export default ScreenThree;
