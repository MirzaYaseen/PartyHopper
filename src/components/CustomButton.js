import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const CustomButtonEight = () => {
  const navigation = useNavigation();
  return (
   <SafeAreaView>

<View style={styles.buttonEight}>
            <TouchableOpacity>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#246BFD',
                  },
                ]}>
                Privacy Policy
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('ScreenNine')}
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
                  styles.textSignEight,
                  {
                    color: '#FFFFFF',
                    fontWeight: '800',
                    fontFamily: 'Lexend',
                  },
                ]}>
                Open
              </Text>
            </TouchableOpacity>
          </View>
   </SafeAreaView>
  )
}
const CustomButtonNine = () => {
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
  )
}
const styles = StyleSheet.create({
  textSignEight: {
    fontSize: 18,

    color: '#FFFFFF',
  },
  buttonEight: {
    alignItems: 'center',
    marginTop: 80,
  },
  textSignNine: {
    fontSize: 17,

    color: '#FFFFFF',
  },
  buttonNine: {
    alignItems: 'center',
    marginTop: 200,
  },
  });
  
export default CustomButtonEight