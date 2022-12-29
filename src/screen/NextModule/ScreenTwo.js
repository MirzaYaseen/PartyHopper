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
import ButtonTwo from '../../constent/Buttons/ButtonTwo'
const ScreenTwo = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
      <ScrollView>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Image
            source={require('../../images/Picture12.png')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              alignSelf: 'center',
              marginLeft: 20,
              marginTop: 50,

              marginRight: 15,
              width: 80,
              height: 80,
            }}
          />
          <Image
            source={require('../../images/Picture13.png')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              alignSelf: 'center',
              marginLeft: 50,
              marginTop: -20,

              marginRight: 15,
              width: 40,
              height: 40,
            }}
          />

          <Image
            source={require('../../images/Picture14.png')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              alignSelf: 'center',
              marginLeft: 60,
              marginTop: 50,

              marginRight: 15,
              width: 80,
              height: 80,
            }}
          />
        </View>

        <View style={{flexDirection:'row'}}>
        <Image
            source={require('../../images/Picture15.png')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 40,
              alignSelf: 'center',
              marginLeft: 25,
              marginTop: 30,

              marginRight: 15,
              width: 60,
              height: 60,
           
            }}
          />
          <Image
            source={require('../../images/centerone.png')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 40,
              alignSelf: 'center',
              marginLeft: 15,
              marginTop: 30,

              marginRight: 15,
              width: 160,
              height: 150,
              borderWidth: 4,
              borderColor: '#246BFD',
            }}
          />
            <Image
            source={require('../../images/Picture16.png')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 40,
              alignSelf: 'center',
              marginLeft: 10,
              marginTop: 30,

              marginRight: 15,
              width: 60,
              height: 60,
             
            }}
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../images/Picture17.png')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              alignSelf: 'center',
              marginLeft: 25,

              marginBottom: 100,
              marginRight: 15,
              width: 80,
              height: 80,
            }}
          />
          <Image
            source={require('../../images/Picture18.png')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              alignSelf: 'center',
              marginLeft: 50,
              marginTop: 80,
              marginBottom: 100,
              marginRight: 15,
              width: 40,
              height: 40,
            }}
          />

          <Image
            source={require('../../images/Picture11.png')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              alignSelf: 'center',
              marginLeft: 60,
              marginTop: 10,
              marginBottom: 100,
              marginRight: 15,
              width: 80,
              height: 80,
            }}
          />
        </View>

        <Text
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 250,
            fontSize: 30,
            marginLeft: 20,
            marginTop: 10,
            color: 'black',
            fontWeight: '700',
            marginBottom: 10,
            fontFamily: 'Lexend',
          }}>
          Join This Event With Anna
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
          Download Party Hopper to join this event with Anna and others.
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
          Your place will be saved when you open Party Hopper after
          installation.
        </Text>

            <ButtonTwo/>
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

export default ScreenTwo;
