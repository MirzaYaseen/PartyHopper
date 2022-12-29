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
import ScreenButtonTwentyEight from '../../constent/Buttons/ScreenButtonTwentyEight';
const ScreenTwentyEight = ({navigation}) => {
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
        Add Your Friends
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
        Add your best friends on Party Hopper. You can message, invite, and
        share clips to friends you add.
      </Text>

      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 30,
          }}>
          <Image
            source={require('../../images/pro.jpg')}
            style={{
              width: 50,
              height: 50,
              marginLeft: 10,
              borderRadius: 30,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              marginTop: 2,
              marginBottom: 10,
              fontWeight: '800',
              color: 'black',
              marginLeft: 10,
            }}>
            Anna{' '}
            <Image
              source={require('../../images/bluetick.png')}
              style={{
                width: 20,
                height: 20,
                marginLeft: 20,
                borderRadius: 30,
              }}
            />{' '}
            {'\n'}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              width: 100,
              height: 40,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 90,
            }}>
            <Text style={{color: 'white', fontWeight: '800'}}>Added</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 30,
          }}>
          <Image
            source={require('../../images/man.png')}
            style={{
              width: 50,
              height: 50,
              marginLeft: 10,
              borderRadius: 30,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              marginTop: 2,
              marginBottom: 10,
              fontWeight: '800',
              color: 'black',
              marginLeft: 10,
            }}>
            Desc{' '}
            <Image
              source={require('../../images/bluetick.png')}
              style={{
                width: 20,
                height: 20,
                marginLeft: 20,
                borderRadius: 30,
              }}
            />{' '}
            {'\n'}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#D0D5DD',
              width: 100,
              height: 40,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 90,
            }}>
            <Text style={{color: 'white', fontWeight: '900'}}>+ Add</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 30,
          }}>
          <Image
            source={require('../../images/woman.png')}
            style={{
              width: 50,
              height: 50,
              marginLeft: 10,
              borderRadius: 30,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              marginTop: 2,
              marginBottom: 10,
              fontWeight: '800',
              color: 'black',
              marginLeft: 10,
            }}>
            Maria{' '}
            <Image
              source={require('../../images/bluetick.png')}
              style={{
                width: 20,
                height: 20,
                marginLeft: 20,
                borderRadius: 30,
              }}
            />{' '}
            {'\n'}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#D0D5DD',
              width: 100,
              height: 40,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 90,
            }}>
            <Text style={{color: 'white', fontWeight: '800'}}>+ Add</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 30,
          }}>
          <Image
            source={require('../../images/pro.jpg')}
            style={{
              width: 50,
              height: 50,
              marginLeft: 10,
              borderRadius: 30,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              marginTop: 2,
              marginBottom: 10,
              fontWeight: '800',
              color: 'black',
              marginLeft: 10,
            }}>
            Pame{' '}
            <Image
              source={require('../../images/bluetick.png')}
              style={{
                width: 20,
                height: 20,
                marginLeft: 20,
                borderRadius: 30,
              }}
            />{' '}
            {'\n'}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#D0D5DD',
              width: 100,
              height: 40,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 90,
            }}>
            <Text style={{color: 'white', fontWeight: '800'}}>+ Add</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 30,
          }}>
          <Image
            source={require('../../images/man.png')}
            style={{
              width: 50,
              height: 50,
              marginLeft: 10,
              borderRadius: 30,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              marginTop: 2,
              marginBottom: 10,
              fontWeight: '800',
              color: 'black',
              marginLeft: 10,
            }}>
            Avery{' '}
            <Image
              source={require('../../images/bluetick.png')}
              style={{
                width: 20,
                height: 20,
                marginLeft: 20,
                borderRadius: 30,
              }}
            />{' '}
            {'\n'}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#D0D5DD',
              width: 100,
              height: 40,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 90,
            }}>
            <Text style={{color: 'white', fontWeight: '800'}}>+ Add</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <ScreenButtonTwentyEight/>

      {/* <View style={styles.button}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ScreenTwentyNine')}
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
        <TouchableOpacity onPress={() => navigation.navigate('ScreenTen')}>
          <Text
            style={{
              fontSize: 18,
              marginTop: 5,
              marginBottom: 5,

              color: '#667085',
            }}>
            Skip
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
    marginTop: 20,
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

export default ScreenTwentyEight;
