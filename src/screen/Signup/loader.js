import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native'
import React,{useEffect} from 'react'
const loader = ({navigation}) => {
  useEffect(()=>{
      setTimeout(()=>{
       navigation.navigate('addEmail');
      },2000)
  },[])
  return (
    <SafeAreaView style={styles.wrapper}>
      <Image source={require('../../images/blank.png')}/>
    </SafeAreaView>
  )
}

export default loader

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})