import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Bio,
  DisplayPicture,
  ProfileInterest,
  AddProfile,
} from './src/screen/bio';
import {
  Welcome,
  DevicePermission,
  ConnectWithSnapchat,
  Loader,
  AddEmail,
} from './src/screen/Signup';
import loaderTwo from './src/screen/Signup/loader2'
import ScreenEight from './src/screen/Signup/ScreenEight';
import ScreenNine from './src/screen/Signup/ScreenNine';
import ScreenTen from './src/screen/Signup/ScreenTen';
import ScreenTwelve from './src/screen/Signup/ScreenTwelve';
import ScreenThirteen from './src/screen/Signup/ScreenThirteen';
import ScreenFourteen from './src/screen/Signup/ScreenFourteen';
import ScreenFifteen from './src/screen/Signup/ScreenFifteen';
import ScreenSixteen from './src/screen/Signup/ScreenSixteen';
import ScreenSeventeen from './src/screen/Signup/ScreenSeventeen';
import ScreenEighteen from './src/screen/Signup/ScreenEighteen';
import ScreenNineteen from './src/screen/Signup/ScreenNineteen';
import ScreenTwenty from './src/screen/Signup/ScreenTwenty';
import ScreenTwentyOne from './src/screen/Signup/ScreenTwentyOne';
import ScreenTwentyTwo from './src/screen/Signup/ScreenTwentyTwo';
import ScreenTwentyThree from './src/screen/Signup/ScreenTwentyThree';
import ScreenTwentyFour from './src/screen/Signup/ScreenTwentyFour';
import ScreenTwentyFive from './src/screen/Signup/ScreenTwentyFive';
import ScreenTwentySix from './src/screen/Signup/ScreenTwentySix';
import ScreenTwentySeven from './src/screen/Signup/ScreenTwentySeven';
import ScreenTwentyEight from './src/screen/Signup/ScreenTwentyEight';
import ScreenTwentyNine from './src/screen/Signup/ScreenTwentyNine';
import ScreenThirty from './src/screen/Signup/ScreenThirty';
import ScreenThirtyOne from './src/screen/Signup/ScreenThirtyOne';
import ScreenOne from './src/screen/NextModule/ScreenOne';
import ScreenTwo from './src/screen/NextModule/ScreenTwo';
import ScreenThree from './src/screen/NextModule/ScreenThree';
import ScreenFour from './src/screen/NextModule/ScreenFour';
import ScreenFive from './src/screen/NextModule/ScreenFive'
import splashScreen from './src/screen/splashScreen/splashScreen';
import ConfirmationScreen from './src/screen/Signup/ConfirmationScreen';
// import ScreenCameraScanner from './src/screen/Signup/ScreenCameraScanner'
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="screenOne" component={ScreenOne} />
      <Stack.Screen name="screenFive" component={ScreenFive} />
      <Stack.Screen name="screenFour" component={ScreenFour} />
      <Stack.Screen name="screenThree" component={ScreenThree} />
      <Stack.Screen name="screenTwo" component={ScreenTwo} />
   




      <Stack.Screen name="splashScreen" component={splashScreen} />
       <Stack.Screen name="ScreenEight" component={ScreenEight} />
        <Stack.Screen name="ScreenThirtyOne" component={ScreenThirtyOne} />
        <Stack.Screen name="ScreenThirty" component={ScreenThirty} />
        <Stack.Screen name="ScreenTwentyNine" component={ScreenTwentyNine} />
        <Stack.Screen name="ScreenTwentyEight" component={ScreenTwentyEight} />
        <Stack.Screen name="ScreenTwentySeven" component={ScreenTwentySeven} />
        <Stack.Screen name="ScreenTwentySix" component={ScreenTwentySix} />
        <Stack.Screen name="ScreenTwentyFive" component={ScreenTwentyFive} />
        <Stack.Screen name="ScreenTwentyFour" component={ScreenTwentyFour} />
        <Stack.Screen name="ScreenTwentyThree" component={ScreenTwentyThree} />
        <Stack.Screen name="ScreenTwentyTwo" component={ScreenTwentyTwo} />
        <Stack.Screen name="ScreenTwentyOne" component={ScreenTwentyOne} />
        <Stack.Screen name="ScreenNineteen" component={ScreenNineteen} />

        <Stack.Screen name="ScreenTwelve" component={ScreenTwelve} />
        <Stack.Screen name="ScreenTwenty" component={ScreenTwenty} />

        <Stack.Screen name="ScreenEighteen" component={ScreenEighteen} />
        <Stack.Screen name="ScreenSeventeen" component={ScreenSeventeen} />
        <Stack.Screen name="ScreenSixteen" component={ScreenSixteen} />
        <Stack.Screen name="ScreenFifteen" component={ScreenFifteen} />

        <Stack.Screen name="ScreenFourteen" component={ScreenFourteen} />
        <Stack.Screen name="ScreenThirteen" component={ScreenThirteen} />
        <Stack.Screen name="ScreenTen" component={ScreenTen} />
        

        <Stack.Screen
          name="ConfirmationScreen"
          component={ConfirmationScreen}
        />

        <Stack.Screen name="ScreenNine" component={ScreenNine} />
        {/* <Stack.Screen name="ScreenTen" component={ScreenTen}/> */}

        
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="devicePermission" component={DevicePermission} />
        <Stack.Screen
          name="connectWithSnapchat"
          component={ConnectWithSnapchat}
        />
        {/* <Stack.Screen name="ScreenEight" component={ScreenEight}/> */}
        <Stack.Screen name="loader" component={Loader} />
        <Stack.Screen name="loaderTwo" component={loaderTwo} />
        <Stack.Screen name="addEmail" component={AddEmail} />

        {/* <Stack.Screen name="Bio" component={Bio} />
        <Stack.Screen name="DisplayPicture" component={DisplayPicture} />
        <Stack.Screen name="AddProfile" component={AddProfile} />
        <Stack.Screen name="ProfileInterest" component={ProfileInterest} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
