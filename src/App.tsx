import { RootNavigator } from '@root/navigation/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const App = () => (
  <SafeAreaProvider>
    <RootNavigator />
  </SafeAreaProvider>
);

export default App;
