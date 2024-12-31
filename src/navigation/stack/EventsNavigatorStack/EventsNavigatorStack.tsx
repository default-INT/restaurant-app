/* eslint-disable global-require */
import { View } from 'react-native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { EventsScreen } from '@root/modules/events/EventsScreen';
import { Header } from '@root/components/Header';
import { memo, useMemo } from 'react';
import { RugbyScreen } from '@root/modules/events/RugbyScreen';
import { CricketScreen } from '@root/modules/events/CricketScreen';
import { EventsNavigatorRoutes } from './types';
import { eventLayout } from './components/EventsLayout';

export const Stack = createNativeStackNavigator();

export const EventsNavigatorStack = memo(() => {
  const screenOptions = useMemo<NativeStackNavigationOptions>(() => ({
    // eslint-disable-next-line react/no-unstable-nested-components
    header: (props: any) => <Header {...props} />,
    contentStyle: { backgroundColor: 'transparent' },
    animation: 'none',
  }), []);

  return (
    <Stack.Navigator
      initialRouteName='Events'
      screenOptions={screenOptions}
      layout={eventLayout}
    >
      <Stack.Screen
        name={EventsNavigatorRoutes.Events}
        component={EventsScreen}
      />
      <Stack.Screen
        name={EventsNavigatorRoutes.Games}
        component={View}
      />
      <Stack.Screen
        name={EventsNavigatorRoutes.CinemaAndDinner}
        component={View}
      />
      <Stack.Screen name={EventsNavigatorRoutes.RugbyDay} component={RugbyScreen} />
      <Stack.Screen name={EventsNavigatorRoutes.CricketDay} component={CricketScreen} />
    </Stack.Navigator>
  );
});

EventsNavigatorStack.displayName = 'EventsNavigatorStack';
