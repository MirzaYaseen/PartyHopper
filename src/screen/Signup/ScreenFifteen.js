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
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {AppImages} from '../../constent/AppImages';
import {Colors} from '../../constent/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {transparent} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import ScreenTenButton from '../../constent/Buttons/ScreenTenButton';
import ScreenFifteenButton from '../../constent/Buttons/ScreenFifteenButton';
const ScreenTen = ({navigation}) => {
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
          <Image
            source={require('../../images/basketball.png')}
            style={{
              marginBottom: hp(4),

              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              width: 50,
              height: 50,
              backgroundColor: '#FFFFFF',
              position: 'relative',
            }}
          />

          <Text style={styles.text_footera}>More From UWEC</Text>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 15,
              },
            ]}>
            Follow your favourite sports, clubs and more to receive personilized
            updates, live video games, discounted tickets and more from your
            college.
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 30,
            }}>
            <TouchableOpacity>
              <ImageBackground
                source={require('../../images/assistance.png')}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: 120,
                  height: 120,
                  backgroundColor: '#FFFFFF',
                  position: 'relative',
                  borderRadius: 20,
                }}>
                <TouchableOpacity
                  style={{
                    top: -50,
                    width: 40,

                    marginLeft: 50,
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      borderWidth: 0.5,
                      marginRight: 10,
                      backgroundColor: 'white',
                      borderRadius: 5,
                      textAlign: 'center',
                    }}>
                    {'+'}
                  </Text>
                </TouchableOpacity>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity>
              <ImageBackground
                source={require('../../images/basketball-court.png')}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: 120,
                  height: 120,
                  backgroundColor: '#FFFFFF',
                  position: 'relative',
                  marginLeft: 20,
                }}>
                <TouchableOpacity
                  style={{
                    top: -50,
                    width: 40,

                    marginLeft: 50,
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      borderWidth: 0.5,
                      marginRight: 10,
                      backgroundColor: 'white',
                      borderRadius: 5,
                      textAlign: 'center',
                    }}>
                    {'+'}
                  </Text>
                </TouchableOpacity>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground
                source={require('../../images/net.png')}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: 120,
                  height: 120,
                  backgroundColor: '#FFFFFF',
                  position: 'relative',

                  borderRadius: 10,
                  marginLeft: 20,
                }}>
                <TouchableOpacity
                  style={{
                    top: -50,
                    width: 40,

                    marginLeft: 55,
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      borderWidth: 0.5,
                      marginRight: 10,
                      backgroundColor: 'white',
                      borderRadius: 5,
                      textAlign: 'center',
                    }}>
                    {'+'}
                  </Text>
                </TouchableOpacity>
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 30,
            }}>
            <TouchableOpacity>
              <ImageBackground
                source={require('../../images/assistance.png')}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: 120,
                  height: 120,
                  backgroundColor: '#FFFFFF',
                  position: 'relative',
                  borderRadius: 20,
                }}>
                <TouchableOpacity
                  style={{
                    top: -50,
                    width: 40,

                    marginLeft: 50,
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      borderWidth: 0.5,
                      marginRight: 10,
                      backgroundColor: 'white',
                      borderRadius: 5,
                      textAlign: 'center',
                    }}>
                    {'+'}
                  </Text>
                </TouchableOpacity>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity>
              <ImageBackground
                source={require('../../images/basketball-court.png')}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: 120,
                  height: 120,
                  backgroundColor: '#FFFFFF',
                  position: 'relative',
                  marginLeft: 20,
                }}>
                <TouchableOpacity
                  style={{
                    top: -50,
                    width: 40,

                    marginLeft: 50,
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      borderWidth: 0.5,
                      marginRight: 10,
                      backgroundColor: 'white',
                      borderRadius: 5,
                      textAlign: 'center',
                    }}>
                    {'+'}
                  </Text>
                </TouchableOpacity>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground
                source={require('../../images/net.png')}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: 120,
                  height: 120,
                  backgroundColor: '#FFFFFF',
                  position: 'relative',

                  borderRadius: 10,
                  marginLeft: 20,
                }}>
                <TouchableOpacity
                  style={{
                    top: -50,
                    width: 40,

                    marginLeft: 55,
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      borderWidth: 0.5,
                      marginRight: 10,
                      backgroundColor: 'white',
                      borderRadius: 5,
                      textAlign: 'center',
                    }}>
                    {'+'}
                  </Text>
                </TouchableOpacity>
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 30,
            }}>
            <TouchableOpacity>
              <ImageBackground
                source={require('../../images/assistance.png')}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: 120,
                  height: 120,
                  backgroundColor: '#FFFFFF',
                  position: 'relative',
                  borderRadius: 20,
                }}>
                <TouchableOpacity
                  style={{
                    top: -50,
                    width: 40,

                    marginLeft: 50,
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      borderWidth: 0.5,
                      marginRight: 10,
                      backgroundColor: 'white',
                      borderRadius: 5,
                      textAlign: 'center',
                    }}>
                    {'+'}
                  </Text>
                </TouchableOpacity>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity>
              <ImageBackground
                source={require('../../images/basketball-court.png')}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: 120,
                  height: 120,
                  backgroundColor: '#FFFFFF',
                  position: 'relative',
                  marginLeft: 20,
                }}>
                <TouchableOpacity
                  style={{
                    top: -50,
                    width: 40,

                    marginLeft: 50,
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      borderWidth: 0.5,
                      marginRight: 10,
                      backgroundColor: 'white',
                      borderRadius: 5,
                      textAlign: 'center',
                    }}>
                    {'+'}
                  </Text>
                </TouchableOpacity>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground
                source={require('../../images/net.png')}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: 120,
                  height: 120,
                  backgroundColor: '#FFFFFF',
                  position: 'relative',

                  borderRadius: 10,
                  marginLeft: 20,
                }}>
                <TouchableOpacity
                  style={{
                    top: -50,
                    width: 40,

                    marginLeft: 55,
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      borderWidth: 0.5,
                      marginRight: 10,
                      backgroundColor: 'white',
                      borderRadius: 5,
                      textAlign: 'center',
                    }}>
                    {'+'}
                  </Text>
                </TouchableOpacity>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <ScreenFifteenButton/>

        {/* <View style={styles.button}>
          <TouchableOpacity>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#246BFD',
                },
              ]}>
              See all
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('ScreenSixteen')}
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
              Follow All
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
      </Animatable.View>
    </SafeAreaView>
  );
};

export default ScreenTen;

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
    marginTop: 12,
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
