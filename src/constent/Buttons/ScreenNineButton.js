import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ScreenNineButton = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.buttonNine}>
        <TouchableOpacity>
          <Text
            style={[
              styles.textSign,
              {
                color: '#246BFD',
              },
            ]}>
            Upload Schedule
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ConfirmationScreen')}
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
              styles.textSignNine,
              {
                color: '#FFFFFF',
                fontWeight: '800',
                fontFamily: 'Lexend',
              },
            ]}>
            Scan
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
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  textSignNine: {
    fontSize: 17,

    color: '#FFFFFF',
  },
  buttonNine: {
    alignItems: 'center',
    marginTop: 200,
  },
});
export default ScreenNineButton;
