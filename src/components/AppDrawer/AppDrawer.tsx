import { memo, useCallback } from 'react';
import { Image, View } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppButton } from '@root/components/AppButton';
import { IconButton } from '@root/components/IconButton';
import { BasketIcon } from '@root/assets/icons';
import { colors } from '@root/constants/colors';
import { useTranslation } from 'react-i18next';
import { CommonActions } from '@react-navigation/native';
import { styles } from './styles';

export const AppDrawer = memo((props: DrawerContentComponentProps) => {
  const { state, navigation } = props;
  const { t } = useTranslation('drawer');

  const handleOpenBasket = useCallback(() => {
    navigation.navigate('ShoppingCartStack');
  }, []);

  const handleLinkClick = useCallback((name: string) => {
    navigation.dispatch(CommonActions.reset({
      index: 0,
      routes: [{ name }],
    }));
  }, []);

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.logoPlaceholder} edges={['top']}>
        <Image
          source={require('@root/assets/images/logo.png')}
          resizeMode='contain'
          style={styles.image}
        />
      </SafeAreaView>
      <View style={styles.content}>
        <View style={styles.menuLinksContainer}>
          {state.routes.filter(route => route.name !== 'ShoppingCartStack')
            .map(route => (
              <AppButton
                key={route.key}
                title={t(route.name)}
                onPress={() => handleLinkClick(route.name)}
              />
            ))}
        </View>
        <IconButton
          icon={BasketIcon}
          style={styles.basketBtn}
          onPress={handleOpenBasket}
          iconProps={{ color: colors.textPrimary, width: 40, height: 40 }}
        />
      </View>
    </View>
  );
});

AppDrawer.displayName = 'AppDrawer';
