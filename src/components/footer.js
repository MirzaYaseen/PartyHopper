import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../constent/Colors';
const Footer = ({
  topContent,
  Custombutton,
  bottomContent,
  skipBtn = () => {},
}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity>
        <Text style={styles.topcontent}>{topContent}</Text>
      </TouchableOpacity>
      <Custombutton />
      <TouchableOpacity onPress={skipBtn}>
        <Text style={styles.bottomcontent}>{bottomContent}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topcontent: {
    color: Colors.urlColor,
    fontSize: 15,
    fontFamily: 'Lexend',
  },
  bottomcontent: {
    color: Colors.PargColor,
    fontFamily: 'Lexend',
    fontSize: 18,
    fontWeight: 'Light 300',
  },
});
