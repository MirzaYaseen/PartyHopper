import {
    StyleSheet,
    Text,
    View,
    Linking,
    Dimensions,
    TouchableOpacity,
    Image
  } from 'react-native';
  import React, {useCallback} from 'react';
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
  import {AppHeader, ContentArea, Footer} from '../../components';
  import {Colors} from '../../constent/Colors';
  import { AppImages } from '../../constent/AppImages';
  const AddEmailScreen = ({navigation}) => {
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
           Add your student email to gain access to exclusive events and instant 
            account verification
          </Text>
        </View>
      );
    };
    const CustomButton = () => {
      return (
        <View style={{width, padding: 10}}>
          <TouchableOpacity onPress={() => navigation.navigate('loaderTwo')}>
            <View style={[styles.btn]}>
              <Text style={styles.btnText}>Add Email</Text>
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
            <Image source={AppImages.profileImage} style={{marginBottom:hp(4)}}/>
            <ContentArea heading="Are you A Student?" Content={Content} />
          </View>
          <View>
            <Footer
              topContent="How your email is used"
              Custombutton={CustomButton}
              bottomContent="I'm not a student"
            />
          </View>
        </View>
      </>
    );
  };
  
  export default AddEmailScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.BgColor,
      padding: 20,
    },
    section: {
      flex: 1,
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
  