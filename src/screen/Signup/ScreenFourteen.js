import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import {AppHeader} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';
import ScreenFourteenButton from '../../constent/Buttons/ScreenFourteenButton';
const ScreenFourteen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
      <AppHeader />
      <ScrollView>
        <Image
          source={require('../../images/cap.png')}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            width: 80,
            height: 80,
            backgroundColor: '#FFFFFF',
            position: 'relative',
          }}
        />
        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            marginTop: 10,
            fontSize: 30,
            color: 'black',
            marginBottom: 5,
          }}>
          Follow UWVC
        </Text>

        <Text
          style={{
            width: 320,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            alignSelf: 'center',
            marginTop: 5,

            color: 'black',
            marginBottom: 20,
          }}>
          Follow your college to receive personalized recommendations for school
          updates, events and news
        </Text>

        <Image
          source={require('../../images/dunmy14.jpg')}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            width: 380,
            height: 300,
            backgroundColor: '#FFFFFF',
            position: 'relative',
            borderRadius: 10,
          }}
        />
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 20,
            marginLeft: 20,
            marginBottom: 10,
            marginRight: 20,
          }}>
          <Text style={{fontSize: 25}}>More From UWEC</Text>
          <TouchableOpacity>
            <Image
              source={require('../../images/fast-forward.png')}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                width: 20,
                marginTop: 5,
                height: 20,
                backgroundColor: '#FFFFFF',
                position: 'relative',
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <ScreenFourteenButton/>
      
      {/* <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 10,
          marginBottom: 10,
        }}>
        <TouchableOpacity>
          <Text style={{fontSize: 16, marginBottom: 5}}>Learn More</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ScreenFifteen')}
          style={{
            backgroundColor: '#246BFD',
            width: 350,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: '600'}}>
            Follow
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ScreenTen')}>
          <Text style={{fontSize: 16, marginTop: 5}}>Skip</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

export default ScreenFourteen;
