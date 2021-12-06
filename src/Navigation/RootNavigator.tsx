import AsyncStorage from '@react-native-async-storage/async-storage';
// import FirebaseAnalytics from '@react-native-firebase/analytics';
import {
  InitialState,
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import * as SplashScreen from 'expo-splash-screen';
import React, {useEffect, useRef, useState} from 'react';
import {Linking} from 'react-native';
import '~/Navigation/GestureHandler';
import {createURL} from 'expo-linking';

// import {BackgroundLoader} from '~/Components';
import {NAVIGATION_PERSISTENCE_KEY} from '~/Constants';
import {useThemeContext} from '~/Context';
import * as RootScreens from '~/Screens/Root';
import {RootStackParamList} from '~/Types';

// const Stack = createNativeStackNavigator<RootStackParamList>();
const Stack = createStackNavigator<RootStackParamList>();

// const RootScreens = Object.entries(RootScreens);

// const analytics = () => ({
//   logScreenView: async ({
//     screenName,
//     screenClass,
//   }: {
//     screenName?: string;
//     screenClass?: string;
//   }) => {
//     FirebaseAnalytics().logScreenView({
//       screen_name: screenName,
//       screen_class: screenClass,
//     });
//   },
// });

export default (): React.ReactElement | null => {
  const {theme} = useThemeContext();

  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState<InitialState | undefined>();
  const navigationRef =
    useRef<NavigationContainerRef<RootStackParamList>>(null);
  const routeNameRef = useRef<string>();

  useEffect(() => {
    const restoreState = async () => {
      const initialUrl = await Linking.getInitialURL();

      if (initialUrl === null) {
        const savedState = await AsyncStorage.getItem(
          NAVIGATION_PERSISTENCE_KEY,
        );
        const state = savedState ? JSON.parse(savedState) : undefined;

        if (state !== undefined) {
          setInitialState(state);
        }
      }

      // await SplashScreen.hideAsync();
      setIsReady(true);
    };

    restoreState();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      // fallback={BackgroundLoader}
      initialState={initialState}
      linking={{
        prefixes: [createURL('/')],
      }}
      theme={theme}
      onReady={() => {
        routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
      }}
      onStateChange={async state => {
        AsyncStorage.setItem(NAVIGATION_PERSISTENCE_KEY, JSON.stringify(state));

        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

        if (previousRouteName !== currentRouteName) {
          // await analytics().logScreenView({
          //   screenName: currentRouteName,
          //   screenClass: currentRouteName,
          // });
        }

        // Save the current route name for later comparison
        routeNameRef.current = currentRouteName;
      }}
    >
      <Stack.Navigator
        initialRouteName={
          RootScreens.OnboardingFirst.name as keyof typeof RootScreens
        }
        screenOptions={{headerShown: false}}
        // screenOptions={}
      >
        {Object.entries(RootScreens).map(([name, component]) => (
          <Stack.Screen
            key={name}
            getComponent={() => component}
            name={name as keyof typeof RootScreens}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
