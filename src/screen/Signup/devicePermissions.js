import {
    StyleSheet,
    Text,
    View,
    Linking,
    Dimensions,
    TouchableOpacity,
    Image,
    FlatList
  } from 'react-native';
  import React, {useCallback} from 'react';
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
  import {AppHeader, ContentArea, Footer} from '../../components';
  import {Colors} from '../../constent/Colors';
  import { AppImages } from '../../constent/AppImages';
  import permissionData from '../../Data/permissionData';
  const Welcome = ({navigation}) => {
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
           Copy and paste, location,notifications,
           and contact synchronization are require to use Party Hopper on your device.  
          </Text>
        </View>
      );
    };
    const CustomButton = () => {
      return (
        <View style={{width, padding: 10}}>
          <TouchableOpacity onPress={() => navigation.navigate('connectWithSnapchat')}>
            <View style={[styles.btn]}>
              <Text style={styles.btnText}>Continue</Text>
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
            <ContentArea heading="Device Permissions" Content={Content} />
           
            <FlatList data={permissionData}
            numColumns={2}
            renderItem={({item})=>  <View style={styles.perContainer}>
            <View style={styles.perbox}>
                <Image source={item.image}/>
            </View>
            <Text style={styles.perheading}>{item.title}</Text>
        </View> }
        keyExtractor={(item, index) => item.id }
        showsVerticalScrollIndicator={false}
        
        />
           
           
          </View>
          <View>
            <Footer
              topContent="How your Data is used"
              Custombutton={CustomButton}
              bottomContent="Why can't I skip "
            />
          </View>
        </View>
      </>
    );
  };
  
  export default Welcome;
  
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
    perContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    perbox:{
        borderWidth:2,
        borderColor:"#D0D5DD",
        borderRadius:wp(3),
        padding:wp(2),
        height:hp(20),
        width:wp(42),
        margin:wp(2),
        flexDirection:"row",
        justifyContent:'center',
        alignItems:"center"
    },
    perheading:{
        fontSize:hp(2),
        fontFamily:"Lexend",
        fontWeight:"bold"
    }

  });
  