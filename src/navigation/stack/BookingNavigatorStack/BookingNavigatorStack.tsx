import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookingScreen } from '@root/modules/booking/BookingScreen';
import { Header } from '@root/components/Header';
import { BookingSuccessScreen } from '@root/modules/booking/BookingSuccessScreen';

export const BookingNavigatorStack = createNativeStackNavigator({
  initialRouteName: 'Booking',
  screens: {
    Booking: BookingScreen,
    Success: BookingSuccessScreen,
  },
  screenOptions: {
    header: props => <Header {...props} />,
  },
});
