import { AppRegistry } from 'react-native';
import { i18n } from './src/utils/i18n';
import App from './src/App';
import { name as appName } from './app.json';
import './gesture-handler';

AppRegistry.registerComponent(appName, () => {
  i18n.init();

  return App;
});
