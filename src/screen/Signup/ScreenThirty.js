import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    SafeAreaView,
    ScrollView
  } from 'react-native';
  import React from 'react';
  import {AppHeader} from '../../components';
  import ScreenThirtyButton from '../../constent/Buttons/ScreenThirtyButton';
  const ScreenThirty = ({navigation}) => {
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
          Select your gender
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
          Your gender determines what information, profiles, and recommendation
          are displayed to you on party Hopper.
        </Text>
  
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 50,
            marginLeft: 10,
            marginRight: 10,
          }}>
          <View style={{borderWidth: 1, borderRadius: 10}}>
            <TouchableOpacity>
              <Image
                source={require('../../images/man.png')}
                style={{
                  marginTop: 20,
                  marginBottom: 20,
                  marginLeft: 20,
                  marginRight: 20,
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
  
          <View style={{borderWidth: 1, borderRadius: 10}}>
            <TouchableOpacity>
              <Image
                source={require('../../images/woman.png')}
                style={{
                  marginTop: 20,
                  marginBottom: 20,
                  marginLeft: 20,
                  marginRight: 20,
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
        </View>
        <View
          style={{
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 18, color: 'black'}}>Male</Text>
          <Text style={{fontSize: 18, marginLeft: 40, color: 'black'}}>
            Female
          </Text>
        </View>

        <ScreenThirtyButton/>
  
        {/* <View style={styles.button}>
          <TouchableOpacity>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#246BFD',
                },
              ]}>
              How your gender is used
            </Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => navigation.navigate('ScreenThirtyOne')}
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
                fontSize: 16,
                marginTop: 5,
  
                color: '#667085',
              }}>
              Why Can't I skip?
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
      marginTop: 190,
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
  
  export default ScreenThirty;
  