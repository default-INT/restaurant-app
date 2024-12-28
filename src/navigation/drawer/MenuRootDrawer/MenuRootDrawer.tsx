import { createDrawerNavigator } from '@react-navigation/drawer';
import { StoreNavigatorStack } from '@root/navigation/stack/StoreNavigatorStack';
import { BookingNavigatorStack } from '@root/navigation/stack/BookingNavigatorStack';
import { ContactsNavigatorStack } from '@root/navigation/stack/ContactsNavigatorStack';
import { AppDrawer } from '@root/components/AppDrawer';
import { EventsNavigatorStack } from '@root/navigation/stack/EventsNavigatorStack';
import { ShoppingCartNavigatorStack } from '@root/navigation/stack/ShoppingCartNavigatorStack';

export const MenuRootDrawer = createDrawerNavigator({
  initialRouteName: 'StoreStack',
  screens: {
    StoreStack: StoreNavigatorStack,
    BookingStack: BookingNavigatorStack,
    ContactsStack: ContactsNavigatorStack,
    EventsStack: EventsNavigatorStack,
    ShoppingCartStack: ShoppingCartNavigatorStack,
  },
  drawerContent: props => <AppDrawer {...props} />,
  screenOptions: {
    drawerStyle: {
      width: '100%',
    },
    header: () => null,
  },
});
