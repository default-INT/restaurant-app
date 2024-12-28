import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '@root/components/Header';
import { BasketScreen } from '@root/modules/shoppingCart/BasketScreen';
import { SuccessOrderScreen } from '@root/modules/shoppingCart/SuccessOrderScreen';

export const ShoppingCartNavigatorStack = createNativeStackNavigator({
  initialRouteName: 'ShoppingCart',
  screens: {
    ShoppingCart: BasketScreen,
    SuccessOrder: SuccessOrderScreen,
  },
  screenOptions: {
    header: props => <Header {...props} />,
  },
});
