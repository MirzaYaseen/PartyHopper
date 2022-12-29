import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Button} from 'react-native-paper';
import {AppHeader, ContentArea, Footer} from '../../components';
import {Colors} from '../../constent/Colors';
import CustomButton from '../../components/CustomButton';
import {AppImages} from '../../constent/AppImages';
import InterestsData from '../../Data/InterestsData';
import ItemData from '../../components/ItemData';
const ProfileInterest = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  const [totalSelected, setTotalSelected] = useState(4);
  const Content = () => {
    return (
      <View>
        <Text style={styles.content}>
          Your profile interests display on your Party Profile and help
          recommend you profiles on Match Beam, Eventi, and Posted Clips.
        </Text>
        <Text style={styles.content}>
          Choose 4 hobbies or activities that interest you from below...
        </Text>
      </View>
    );
  };
  const CustomButton = () => {
    return (
      <View style={{width, padding: 10}}>
        <TouchableOpacity onPress={() => navigation.navigate('AddProfile')}>
          <View style={[styles.btn]}>
            <Text style={styles.btnText}>
              Choose {totalSelected == 0 ? 0 : totalSelected}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const [Data, setData] = useState(InterestsData);

  const onSelect = ind => {
    // if (selectItem.includes(innd)) {
    //   const index = selectItem.indexOf(innd);
    //   selectItem.splice(index, 1);
    //   setSelectItem([...selectItem]);
    // } else {
    //   setSelectItem([...selectItem, innd]);
    // }
    // item.isselected ? totalSelected - 1 : totalSelected + 1;
    console.log('naveed ahmad testing =>', typeof totalSelected);
    const arr = Data.map((item, index) => {
      if (ind == index) {
        // item.isselected
        //   ? setTotalSelected(totalSelected < 4 ? totalSelected - 1 : '')
        //   : setTotalSelected(totalSelected < 0 ? totalSelected + 1 : '');
        item.isselected = !item.isselected;

        item.isselected
          ? setTotalSelected(
              (totalSelected <= 4) & (totalSelected > 0)
                ? totalSelected - 1
                : 4,
            )
          : setTotalSelected(
              (totalSelected < 4) & (totalSelected > -1)
                ? totalSelected + 1
                : 4,
            );
      }
      return {...item};
    });
    //console.log(arr);
    setData(arr);
  };
  return (
    <>
      <AppHeader />
      <View style={styles.container}>
        <View style={styles.section}>
          <ContentArea heading="Add 4 Profile Interests" Content={Content} />

          <View style={styles.treadingSection}>
            <Text style={styles.treadingTitle}>
              <Image source={AppImages.treading} /> Treading
            </Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <FlatList
              data={Data}
              renderItem={({item, index}) => (
                <ItemData
                  item={item}
                  index={index}
                  onSelect={onSelect}
                  totalSelected={totalSelected}
                />
              )}
              keyExtractor={item => item.id}
              numColumns={2}
            />
          </ScrollView>
        </View>

        <View>
          <Footer
            topContent=""
            Custombutton={CustomButton}
            bottomContent="Why can't skip?"
          />
        </View>
      </View>
    </>
  );
};

export default ProfileInterest;

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
    marginTop: 10,
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
    backgroundColor: Colors.BtnSecondary,
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
  treadingSection: {
    marginTop: 20,
  },
  treadingTitle: {
    fontFamily: 'Lexend',
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.HeadingColor,
  },
});
