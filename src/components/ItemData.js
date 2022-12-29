import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {Colors} from '../constent/Colors';

const ItemData = ({item, index, onSelect, totalSelected}) => {
  return (
    <TouchableOpacity
      onPress={() => onSelect(index)}
      disabled={item.isselected != true && totalSelected == 0 ? true : false}>
      <View
        style={[
          styles.btn,
          {backgroundColor: item.isselected ? Colors.BtnPrimary : 'white'},
        ]}>
        <Text style={{color: item.isselected ? 'white' : 'black'}}>
          <Image source={item.image} /> {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemData;

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',

    width: 100,
    // padding: 20,
    margin: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.BoderColor,
  },
});
