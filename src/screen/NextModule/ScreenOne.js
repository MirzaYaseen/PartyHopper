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
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {AppImages} from '../../constent/AppImages';
import {Colors} from '../../constent/Colors';
import MapView from 'react-native-maps';
import ButtonOne from '../../constent/Buttons/ButtonOne'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {transparent} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
const ScreenOne = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={require('../../images/backgrou.png')}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              backgroundColor: '#D0D5DD',
              width: 60,
              height: 60,
              marginTop: 20,
              marginLeft: 10,
            }}>
            <Image
              source={require('../../images/leftarrow.png')}
              style={{
                marginBottom: hp(1),
                marginTop: hp(2),
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                alignSelf: 'center',

                width: 20,
                height: 30,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              backgroundColor: '#FFFFFF',
              width: 60,
              height: 60,
              marginRight: 10,
              marginTop: 20,
              marginLeft: 10,
            }}>
            <Image
              source={require('../../images/verticalmenu.png')}
              style={{
                marginBottom: hp(1),
                marginTop: hp(2),
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                alignSelf: 'center',

                width: 20,
                height: 30,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.header}></View>

        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <ScrollView>
            <Text style={styles.text_footera}>Jack0-lantern</Text>

            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 5,
                },
              ]}>
              Halloween House party
            </Text>

            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../images/men1.png')}
                style={{
                  marginBottom: hp(1),
                  marginTop: hp(2),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  alignSelf: 'center',

                  width: 60,
                  height: 60,
                }}
              />
              <Image
                source={require('../../images/men2.png')}
                style={{
                  marginBottom: hp(1),
                  marginTop: hp(2),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  alignSelf: 'center',
                  right: 20,
                  width: 60,
                  height: 60,
                }}
              />
              <Image
                source={require('../../images/men3.png')}
                style={{
                  marginBottom: hp(1),
                  marginTop: hp(2),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  alignSelf: 'center',
                  right: 40,
                  width: 60,
                  height: 60,
                }}
              />
              <Image
                source={require('../../images/men4.png')}
                style={{
                  marginBottom: hp(1),
                  marginTop: hp(2),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  alignSelf: 'center',
                  right: 60,
                  width: 60,
                  height: 60,
                }}
              />
              <TouchableOpacity
                style={{
                  marginBottom: hp(1),
                  marginTop: hp(2),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 30,
                  alignSelf: 'center',
                  right: 70,
                  padding: 15,
                  borderWidth: 1,
                  borderColor: '#DCEAFF',
                }}>
                <Text style={{fontSize: 20, color: '#246BFD'}}>+6 more</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                justifyContent: 'space-evenly',
              }}>
              <Image
                source={require('../../images/free.png')}
                style={{
                  marginBottom: hp(1),
                  marginTop: hp(2),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  alignSelf: 'center',
                  marginRight: 5,
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginBottom: hp(1),
                  marginTop: hp(2),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  alignSelf: 'center',
                  fontSize: 18,
                  fontWeight: '500',
                }}>
                Free
              </Text>
              <Image
                source={require('../../images/nowait.png')}
                style={{
                  marginBottom: hp(1),
                  marginTop: hp(2),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  alignSelf: 'center',
                  marginRight: 5,
                  width: 30,
                  height: 30,
                  marginLeft: 10,
                }}
              />
              <Text
                style={{
                  marginBottom: hp(1),
                  marginTop: hp(2),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  alignSelf: 'center',
                  fontSize: 18,
                  fontWeight: '500',
                }}>
                No Wait
              </Text>
              <Image
                source={require('../../images/available.png')}
                style={{
                  marginBottom: hp(1),
                  marginTop: hp(2),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  alignSelf: 'center',
                  marginLeft: 10,
                  marginRight: 5,
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginBottom: hp(1),
                  marginTop: hp(2),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  alignSelf: 'center',
                  fontSize: 18,
                  fontWeight: '500',
                }}>
                Available
              </Text>
              <Image
                source={require('../../images/invited.png')}
                style={{
                  marginBottom: hp(1),
                  marginTop: hp(2),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  alignSelf: 'center',
                  marginLeft: 10,
                  marginRight: 5,
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginBottom: hp(1),
                  marginTop: hp(2),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  alignSelf: 'center',
                  fontSize: 18,
                  fontWeight: '500',
                }}>
                Invited
              </Text>
            </View>
            <View>
              <View style={{flexDirection: 'row', marginTop: 50}}>
                <TouchableOpacity
                  style={{
                    borderWidth: 2,
                    borderColor: '#FFD37E',
                    borderRadius: 15,
                  }}>
                  <Image
                    source={require('../../images/calender.png')}
                    style={{
                      marginBottom: hp(1.5),
                      marginTop: hp(1.5),
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 10,
                      alignSelf: 'center',
                      marginLeft: 15,
                      marginRight: 15,
                      width: 50,
                      height: 50,
                    }}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    marginBottom: hp(1),

                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    alignSelf: 'center',
                    marginLeft: 15,
                    fontSize: 25,
                    fontWeight: '800',
                    color: '#101828',
                  }}>
                  Starts Tonight At 9PM{'\n'}
                </Text>
              </View>
              <Text
                style={{
                  top: -70,
                  marginLeft: 95,
                  fontSize: 18,
                  marginTop: 10,
                  fontWeight: '600',
                  color: '#667085',
                }}>
                {'\n'} 11/11/2022 - 11/12/2022
              </Text>
            </View>

            <View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{
                    borderWidth: 2,
                    borderColor: '#FFD37E',
                    borderRadius: 15,
                  }}>
                  <Image
                    source={require('../../images/calender.png')}
                    style={{
                      marginBottom: hp(1.5),
                      marginTop: hp(1.5),
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 10,
                      alignSelf: 'center',
                      marginLeft: 15,
                      marginRight: 15,
                      width: 50,
                      height: 50,
                    }}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    marginBottom: hp(1),

                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    alignSelf: 'center',
                    marginLeft: 15,
                    fontSize: 25,
                    fontWeight: '800',
                    color: '#101828',
                  }}>
                  Custume Party{'\n'}
                </Text>
              </View>
              <Text
                style={{
                  top: -70,
                  marginLeft: 95,
                  fontSize: 18,
                  marginTop: 10,
                  fontWeight: '600',
                  color: '#667085',
                }}>
                {'\n'} Wear your Favourite Costume!
              </Text>
            </View>

            <View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{
                    borderWidth: 2,
                    borderColor: '#FFD37E',
                    borderRadius: 15,
                  }}>
                  <Image
                    source={require('../../images/calender.png')}
                    style={{
                      marginBottom: hp(1.5),
                      marginTop: hp(1.5),
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 10,
                      alignSelf: 'center',
                      marginLeft: 15,
                      marginRight: 15,
                      width: 50,
                      height: 50,
                    }}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    marginBottom: hp(1),

                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    alignSelf: 'center',
                    marginLeft: 15,
                    fontSize: 25,
                    fontWeight: '800',
                    color: '#101828',
                  }}>
                  Yummy and Tasty{'\n'}
                </Text>
              </View>
              <Text
                style={{
                  top: -70,
                  marginLeft: 95,
                  fontSize: 18,
                  marginTop: 10,
                  fontWeight: '600',
                  color: '#667085',
                }}>
                {'\n'} Complementary food, drinks and more.
              </Text>
            </View>

            <View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{
                    borderWidth: 2,
                    borderColor: '#FFD37E',
                    borderRadius: 15,
                  }}>
                  <Image
                    source={require('../../images/calender.png')}
                    style={{
                      marginBottom: hp(1.5),
                      marginTop: hp(1.5),
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 10,
                      alignSelf: 'center',
                      marginLeft: 15,
                      marginRight: 15,
                      width: 50,
                      height: 50,
                    }}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    marginBottom: hp(1),

                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    alignSelf: 'center',
                    marginLeft: 15,
                    fontSize: 25,
                    fontWeight: '800',
                    color: '#101828',
                  }}>
                  18+{'\n'}
                </Text>
              </View>
              <Text
                style={{
                  top: -70,
                  marginLeft: 95,
                  fontSize: 18,
                  marginTop: 10,
                  fontWeight: '600',
                  color: '#667085',
                }}>
                {'\n'} Under 18 not allowed unless occupied by an adult.
              </Text>
            </View>

            <View
              style={{
                backgroundColor: '#FFD37E',
                height: 100,
                width: '90%',
                borderRadius: 20,
                marginLeft: 20,
                marginRight: 20,
                justifyContent: 'center',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <Text
                    style={{
                      marginBottom: hp(1.5),
                      marginTop: hp(3),
                      fontSize: 20,
                      fontWeight: '400',
                      borderRadius: 10,
                    }}>
                    {'7'}
                  </Text>
                  <Image
                    source={require('../../images/man.png')}
                    style={{
                      marginBottom: hp(1.5),
                      marginTop: hp(3),
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 10,
                      alignSelf: 'center',
                      marginLeft: 15,
                      marginRight: 15,
                      width: 30,
                      height: 30,
                    }}
                  />
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'white',
                    marginLeft: 10,
                    marginRight: 10,
                    borderRadius: 10,
                    width: 100,
                    height: 70,
                    marginTop: 5,
                    backgroundColor: 'white',
                  }}>
                  <Text
                    style={{
                      justifyContent: 'center',
                      alignSelf: 'center',
                      marginTop: hp(1.5),
                      fontSize: 20,
                      fontWeight: '400',
                      marginLeft: 10,
                      marginRight: 10,
                    }}>
                    {'7'}
                  </Text>
                  <Text
                    style={{
                      justifyContent: 'center',
                      alignSelf: 'center',
                      fontSize: 18,
                      fontWeight: '400',
                      marginLeft: 10,
                      marginRight: 10,
                    }}>
                    Total
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <Text
                    style={{
                      marginBottom: hp(1.5),
                      marginTop: hp(3),
                      fontSize: 20,
                      fontWeight: '400',
                      borderRadius: 10,
                    }}>
                    {'7'}
                  </Text>
                  <Image
                    source={require('../../images/woman.png')}
                    style={{
                      marginBottom: hp(1.5),
                      marginTop: hp(3),
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 10,
                      alignSelf: 'center',
                      marginLeft: 15,
                      marginRight: 15,
                      width: 30,
                      height: 30,
                    }}
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                borderWidth: 1,
                marginBottom: 20,
                marginTop: 40,
                borderRadius: 20,
                borderColor: '#DCEAFF',
              }}>
              <MapView
                style={{
                  width: '90%',
                  height: 200,
                  marginTop: 20,
                  marginBottom: 20,
                  marginLeft: 20,
                  marginRight: 20,
                }}></MapView>
            </View>

            <View style={{marginTop: 20, marginLeft: 20}}>
              <Text style={{fontSize: 22, color: '#1D2939'}}>
                📍 3 miles away approximately.
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 5,
                  marginLeft: 35,
                  color: '#1D2939',
                }}>
                The host of this event has location scrambling turned on.
              </Text>
            </View>
               
               <ButtonOne/>
            
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
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ScreenOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3E3E3',
  },
  header: {
    flex: 1,
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
    fontSize: 18,
    fontWeight: '400',
    marginTop: 10,
  },
  text_footera: {
    color: '#101828',
    fontSize: 25,
    fontFamily: 'Lexend',
    fontWeight: '700',
    marginTop: 20,
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
