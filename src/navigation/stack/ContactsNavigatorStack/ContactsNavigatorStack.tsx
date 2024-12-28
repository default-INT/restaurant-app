import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ContactsScreen } from '@root/modules/contacts/ContactsScreen';
import { Header } from '@root/components/Header';

export const ContactsNavigatorStack = createNativeStackNavigator({
  initialRouteName: 'Contacts',
  screens: {
    Contacts: ContactsScreen,
  },
  screenOptions: {
    header: props => <Header {...props} />,
  },
});
