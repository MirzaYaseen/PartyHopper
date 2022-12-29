import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {AppHeader, ContentArea, Footer} from '../../components';
import {Colors} from '../../constent/Colors';
import CustomButton from '../../components/CustomButton';
import {AppImages} from '../../constent/AppImages';
import {FlatList} from 'react-native-gesture-handler';
const AddProfile = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  const [profileImage, setProfileImage] = useState([]);
  const Content = () => {
    return (
      <View>
        <Text style={styles.content}>
          Add up to 3 profile pictures to your account.
        </Text>
      </View>
    );
  };
  const CustomButton = () => {
    return (
      <View style={{width, padding: 10}}>
        <TouchableOpacity onPress={() => navigation.navigate('DisplayPicture')}>
          <View style={[styles.btn]}>
            <Text style={styles.btnText}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const imageSelect = async () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    const result = await launchImageLibrary(options);
    setProfileImage([...profileImage, result.assets[0].uri]);
  };
  return (
    <>
      <AppHeader />
      <View style={styles.container}>
        <View style={styles.section}>
          <ContentArea heading="Add Profile Pictures" Content={Content} />
        </View>

        <View style={styles.profilePicView}>
          <View style={styles.profileImageView}>
            <FlatList
              data={profileImage}
              renderItem={profile => (
                <View>
                  <Image
                    source={{
                      uri: profile.item,
                    }}
                    style={{marginRight: hp(2), width: 100, height: 100}}
                  />
                </View>
              )}
              keyExtractor={profile => profile.index + 1}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              numColumns={3}
            />
          </View>
          <TouchableOpacity
            onPress={() => imageSelect()}
            disabled={profileImage.length === 3 ? true : false}>
            <View style={styles.selectPicView}>
              <View style={styles.selectPicInnverView}>
                <Icon name="plus" color="#fff" size={wp(7)} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Footer
            topContent="How your Profile pictures are used"
            Custombutton={CustomButton}
            bottomContent="Skip"
          />
        </View>
      </View>
    </>
  );
};

export default AddProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BgColor,
    padding: 20,
  },
  section: {
    flex: 1,
    marginTop: hp(-1),
  },
  content: {
    marginTop: 20,
    fontFamily: 'Lexend',
    fontSize: hp(4 * 0.7),
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
  profilePicView: {
    flex: 1,
    flexDirection: 'column',
    marginTop: hp(-20),
    marginBottom: hp(10),
    // backgroundColor: 'red',
  },
  selectPicView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('40%'),
    height: hp('20%'),
    borderWidth: 2,
    borderColor: '#246BFD',
    borderStyle: 'dotted',
    borderRadius: 12,
  },
  selectPicInnverView: {
    backgroundColor: Colors.BtnPrimary,
    padding: wp(4),
    borderRadius: 12,
  },
  profileImageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: hp(2),
  },
});
