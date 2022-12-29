import {
  StyleSheet,
  Text,
  View,
  Linking,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback} from 'react';
import {Button} from 'react-native-paper';
import {AppHeader, ContentArea, Footer} from '../../components';
import {Colors} from '../../constent/Colors';
import CustomButton from '../../components/CustomButton';
const DisplayPicture = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL('https://google.com');
    if (supported) {
      await Linking.openURL(url);
    }
  }, []);
  const Content = () => {
    return (
      <View>
        <Text style={styles.content}>
          Add a picture to display on your Party profile.
        </Text>
      </View>
    );
  };
  const CustomButton = () => {
    return (
      <View style={{width, padding: 10}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileInterest')}>
          <View style={[styles.btn]}>
            <Text style={styles.btnText}>Add Photo</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <AppHeader />
      <View style={styles.container}>
        <View style={styles.section}>
          <ContentArea heading="Add a Display Picture" Content={Content} />
        </View>
        <View>
          <Footer
            topContent="How your display picture is used"
            Custombutton={CustomButton}
            bottomContent="Skip and use default BitMoji"
          />
        </View>
      </View>
    </>
  );
};

export default DisplayPicture;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BgColor,
    padding: 20,
  },
  section: {
    flex: 1,
    marginTop: 40,
  },
  content: {
    marginTop: 20,
    fontFamily: 'Lexend',
    fontSize: 20,
    color: Colors.PargColor,
    lineHeight: 27,
  },
  url: {
    fontFamily: 'Lexend',
    color: Colors.urlColor,
    textDecorationLine: 'underline',
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: Colors.BtnPrimary,
    padding: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 10,
  },
  btnText: {
    color: Colors.white,
    fontFamily: 'Lexend',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
