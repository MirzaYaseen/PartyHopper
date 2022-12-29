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
import ScreenTwentyFiveButton from '../../constent/Buttons/ScreenTwentyFiveButton';
const ScreenTwentyFive = ({navigation}) => {
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
        Add 4 Profile Interests
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
        Your profile interests display on your Profile and display on your
        Profile and help you recommend you profiles on MatchBeam, events on
        Eventi, and posted Clips.
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
        Choose 4 hobbies or activities that interest you from below.
      </Text>
      <ScrollView>
        <View style={{flexDirection: 'row', marginTop: 40, marginLeft: 20}}>
          <Image
            source={require('../../images/flame.png')}
            style={{
              width: 30,
              height: 30,
            }}
          />
          <Text
            style={{
              width: 350,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 10,
              fontSize: 25,

              color: 'black',
            }}>
            Trending
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            style={{
              width: 160,
              backgroundColor: 'silver',
              padding: 20,
              borderRadius: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../images/fishing-rod.png')}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 5,
                }}
              />
              <Text style={{color: 'white', fontSize: 20}}>Fishing</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 160,
              backgroundColor: 'silver',
              padding: 20,
              borderRadius: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../images/umbrella.png')}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 5,
                }}
              />
              <Text style={{color: 'white', fontSize: 20}}>Beach</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            style={{
              width: 160,
              backgroundColor: 'silver',
              padding: 20,
              borderRadius: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../images/vlog.png')}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 5,
                }}
              />
              <Text style={{color: 'white', fontSize: 20}}>Vlog</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 160,
              backgroundColor: 'silver',
              padding: 20,
              borderRadius: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../images/cap.png')}
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 5,
                }}
              />
              <Text style={{color: 'white', fontSize: 20}}>UWEC</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-evenly',
            marginBottom: 20,
          }}>
          <TouchableOpacity
            style={{
              width: 160,
              backgroundColor: 'silver',
              padding: 20,
              borderRadius: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../images/plane.png')}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 5,
                }}
              />
              <Text style={{color: 'white', fontSize: 20}}>Travelling</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 160,
              backgroundColor: 'silver',
              padding: 20,
              borderRadius: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../images/cap.png')}
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 5,
                }}
              />
              <Text style={{color: 'white', fontSize: 20}}>Ivyleage</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <ScreenTwentyFiveButton/>
    
      {/* <View style={styles.button}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ScreenTwentySix')}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '98%',
            height: 60,
            marginTop: 10,
            backgroundColor: '#98A2B3',
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
            Choose 4
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              marginTop: 5,
              marginBottom: 5,
              color: '#667085',
            }}>
            why can't I skip?
          </Text>
        </TouchableOpacity>
      </View> */}
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
    marginTop: 10,
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

export default ScreenTwentyFive;
