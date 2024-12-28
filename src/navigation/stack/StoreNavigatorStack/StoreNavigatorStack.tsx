import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '@root/modules/store/HomeScreen';
import { Header } from '@root/components/Header';

export const StoreNavigatorStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: HomeScreen,
  },
  screenOptions: {
    header: props => <Header {...props} />,
  },
});
