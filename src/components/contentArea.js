import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../constent/Colors';

const contentArea = ({heading, Content}) => {
  return (
    <View>
      <Text style={styles.heading}>{heading}</Text>
      <Content />
    </View>
  );
};

export default contentArea;

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Lexend',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 34,
    lineHeight: 40,
    color: Colors.HeadingColor,
  },
});
