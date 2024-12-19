import { createStaticNavigation, StaticParamList } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootScreen } from '@root/modules/RootScreen';
import { HomeScreen } from '@root/modules/HomeScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Root',
  screens: {
    Root: RootScreen,
    Home: HomeScreen,
  },
});

export const RootNavigator = createStaticNavigation(RootStack);

type TRootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TRootStackParamList {}
  }
}
