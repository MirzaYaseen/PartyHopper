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
import ScreenEightButton from '../../constent/Buttons/ScreenEightButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {transparent} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
const ScreenEight = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />

      <View style={styles.header}></View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Image
            source={require('../../images/right_old.png')}
            style={{
              marginBottom: hp(4),
              marginTop: hp(2),
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              width: 80,
              height: 80,
              backgroundColor: '#FFFFFF',
              position: 'relative',
            }}
          />

          <Text style={styles.text_footera}>Return Back To Party Hopper</Text>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 15,
              },
            ]}>
            Your Student mail has successfully been verified
          </Text>

          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              Your account now has full access to special student features,
              eventsand more. Return back to Party Hopper to continue
            </Text>
          </View>

          <ScreenEightButton/>

        </ScrollView>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default ScreenEight;

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
    marginTop: 80,
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
