import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
  Image,
  SafeAreaView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {AppImages} from '../../constent/AppImages';
import {Colors} from '../../constent/Colors';
import ScreenNineteenButton from '../../constent/Buttons/ScreenNineteenButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {transparent} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
const ScreenNineteen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}></View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={require('../../images/closepic.png')}
              style={{
                marginBottom: hp(1),
                marginTop: hp(2),
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                marginLeft: '85%',
                width: 18,
                height: 18,
                backgroundColor: '#FFFFFF',
              }}
            />
          </TouchableOpacity>

          <Text style={styles.text_footera}>Create a Username</Text>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 15,
              },
            ]}>
            Your Username will be used to display your profile on MatchBeam,
            Eventi, Clips and more.
          </Text>

          <Text
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
              marginLeft: 10,
              marginTop: 60,
              color: 'black',
            }}>
            Username
          </Text>

          <View
            style={{
              marginLeft: 10,
              marginTop: 20,
            }}>
            <TextInput
              style={{
                width: '95%',
                borderWidth: 1,
                marginTop: 10,
                borderRadius: 10,
              }}
            />
          </View>


          <ScreenNineteenButton/>
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
              onPress={() => navigation.navigate('ScreenTwenty')}
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
                Skip and auto generate Username
              </Text>
            </TouchableOpacity>
          </View> */}
        </ScrollView>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default ScreenNineteen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3E3E3',
  },
  header: {
    flex: 0.5,
    justifyContent: 'flex-end',
    paddingHorizontal: 50,
  },
  footer: {
    flex: Platform.OS === 'android' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 30,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  text_footer: {
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
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actiona: {
    flexDirection: 'row',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 170,
  },
  privacypolicy: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
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
  color_textPrivate: {
    color: '#667085',
    fontFamily: 'Lexend',
    fontWeight: '400',
  },
});
