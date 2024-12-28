import { createStaticNavigation, StaticParamList } from '@react-navigation/native';
import { MenuRootDrawer } from '../drawer/MenuRootDrawer';

export const RootNavigator = createStaticNavigation(MenuRootDrawer);

type TRootStackParamList = StaticParamList<typeof MenuRootDrawer>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TRootStackParamList {}
  }
}
