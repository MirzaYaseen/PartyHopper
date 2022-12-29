import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import {AppHeader} from '../../components';

import {ScrollView} from 'react-native-gesture-handler';
import ScreenTwelveButton from '../../constent/Buttons/ScreenTwelveButton';
const ScreenTwelve = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
      <AppHeader />

      <Text
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginTop: 10,
          fontSize: 30,
          color: 'black',
          marginBottom: 20,
        }}>
        Confirm Schedule
      </Text>

      <View
        style={{
          width: '90%',
          height: 90,
          marginBottom: 10,
          alignSelf: 'center',
          borderRadius: 20,
          backgroundColor: 'silver',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image
            source={require('../../images/togglebutton.png')}
            style={{
              alignSelf: 'center',
              width: 50,
              height: 50,

              marginLeft: 10,
            }}
          />
          <Text
            style={{
              marginRight: 46,
              fontSize: 20,
              marginTop: 10,
              color: 'black',
            }}>
            Receive Class Notifications
          </Text>
        </View>
        <Text
          style={{
            marginLeft: 80,
            fontSize: 16,
            top: -15,
            width: 250,
            marginBottom: 10,
          }}>
          Notification include homework, updates, new classmates & more.
        </Text>
      </View>

      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <Image
            source={require('../../images/earth.png')}
            style={{
              width: 50,
              height: 50,
              marginLeft: 10,
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
            Geography {'\n'}
            <Text style={{fontSize: 12, marginTop: 5, fontWeight: '500'}}>
              Room: 107 . 7AM-10AM
            </Text>
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../../images/menu.png')}
              style={{
                width: 25,
                height: 25,
                marginLeft: 10,
                marginTop: 10,
                marginLeft: 60,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../images/more.png')}
              style={{
                width: 40,
                height: 40,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 3,
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 30,
          }}>
          <Image
            source={require('../../images/right-triangle.png')}
            style={{
              width: 50,
              height: 50,
              marginLeft: 10,
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
            Math {'\n'}
            <Text style={{fontSize: 12, marginTop: 5, fontWeight: '500'}}>
              Room: 122 . 11AM-12PM
            </Text>
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../../images/menu.png')}
              style={{
                width: 25,
                height: 25,
                marginLeft: 10,
                marginTop: 10,
                marginLeft: 60,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../images/more.png')}
              style={{
                width: 40,
                height: 40,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 3,
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 30,
          }}>
          <Image
            source={require('../../images/fast-food.png')}
            style={{
              width: 50,
              height: 50,
              marginLeft: 10,
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
            Lunch Break {'\n'}
            <Text style={{fontSize: 12, marginTop: 5, fontWeight: '500'}}>
              12PM-1PM
            </Text>
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../../images/menu.png')}
              style={{
                width: 25,
                height: 25,
                marginLeft: 10,
                marginTop: 10,
                marginLeft: 60,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../images/more.png')}
              style={{
                width: 40,
                height: 40,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 3,
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 30,
          }}>
          <Image
            source={require('../../images/dna.png')}
            style={{
              width: 50,
              height: 50,
              marginLeft: 10,
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
            Biology {'\n'}
            <Text style={{fontSize: 12, marginTop: 5, fontWeight: '500'}}>
              Room: 258 . 1PM-3PM
            </Text>
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../../images/menu.png')}
              style={{
                width: 25,
                height: 25,
                marginLeft: 10,
                marginTop: 10,
                marginLeft: 60,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../images/more.png')}
              style={{
                width: 40,
                height: 40,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 3,
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 30,
            marginBottom: 20,
          }}>
          <Image
            source={require('../../images/test-tubes.png')}
            style={{
              width: 50,
              height: 50,
              marginLeft: 10,
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
            Chemistry {'\n'}
            <Text style={{fontSize: 12, marginTop: 5, fontWeight: '500'}}>
              Room: 156 . 3PM-4PM
            </Text>
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../../images/menu.png')}
              style={{
                width: 25,
                height: 25,
                marginLeft: 10,
                marginTop: 10,
                marginLeft: 60,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../images/more.png')}
              style={{
                width: 40,
                height: 40,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 3,
              }}
            />
          </TouchableOpacity>
        </View>
       
      </ScrollView>
      <ScreenTwelveButton />
      {/* <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 10,
          marginBottom: 10,
        }}>
        <TouchableOpacity>
          <Text style={{fontSize: 16, marginBottom: 5}}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ScreenThirteen')}
          style={{
            backgroundColor: '#246BFD',
            width: 350,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: '600'}}>
            Confirm
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{fontSize: 16, marginTop: 5}}>Skip</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

export default ScreenTwelve;
