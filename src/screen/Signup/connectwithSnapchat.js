import {
  StyleSheet,
  Text,
  View,
  Linking,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useCallback, useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppHeader, ContentArea, Footer} from '../../components';
import {Colors} from '../../constent/Colors';
import {AppImages} from '../../constent/AppImages';
import BottomSheet from '../../components/bottomSheet';
const ConnectwithSnapchat = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  const refRBSheet = useRef();
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
          Sync your display name and BitMoji to Party Hopper
        </Text>
      </View>
    );
  };
  const CustomButton = () => {
    return (
      <View style={{width, padding: 10}}>
        <TouchableOpacity onPress={() => navigation.navigate('loader')}>
          <View style={[styles.btn]}>
            <Text style={styles.btnText}>Connect</Text>
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
          <Image
            source={AppImages.profileImage}
            style={{marginBottom: hp(4)}}
          />
          <ContentArea
            heading="Party Hopper Connects With Snapchat"
            Content={Content}
          />
        </View>
        <View>
          <Footer
            topContent="How your data is used"
            Custombutton={CustomButton}
            bottomContent="Skip"
            skipBtn={() => refRBSheet.current.open()}
          />
        </View>
        <RBSheet
          ref={refRBSheet}
          height={500}
          // closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            container: {
              borderRadius: wp(10),
            },
          }}>
          <BottomSheet
            Content={
              <ContentArea
                heading="Party Hopper Connects With Snapchat"
                Content={Content}
              />
            }
            image={'../../images/questionmark.png'}
            Footer={
              <Footer
                topContent="How your data is used"
                Custombutton={CustomButton}
                bottomContent="Skip"
              />
            }
          />
        </RBSheet>
      </View>
    </>
  );
};

export default ConnectwithSnapchat;

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
