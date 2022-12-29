import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const BottomSheet = ({Content, Footer, image = null}) => {
  return (
    <View style={styles.wrapper}>
      {/* {image && <Image source={require(image)}/>} */}
      <Content />
      <Footer />
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({});
