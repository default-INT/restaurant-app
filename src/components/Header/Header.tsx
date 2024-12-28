import { memo, useCallback } from 'react';
import { Image, Text, View } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowBackIcon, BasketIcon, BurgerIcon } from '@root/assets/icons';
import { IconButton } from '@root/components/IconButton';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StaticParamList, useNavigation } from '@react-navigation/native';
import { colors } from '@root/constants/colors';
import { MenuRootDrawer } from '@root/navigation/drawer/MenuRootDrawer';
import { styles } from './styles';

const iconProps = { width: 32, height: 32 };

export const Header = memo((props: NativeStackHeaderProps) => {
  const { } = props;
  const navigation = useNavigation<DrawerNavigationProp<StaticParamList<typeof MenuRootDrawer>>>();
  const isHasHistory = navigation.getState().routes.length > 1;

  const handleOpenBasket = useCallback(() => {
    navigation.navigate('ShoppingCartStack');
  }, [navigation]);

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleOpenDrawer = useCallback(() => {
    navigation.openDrawer();
  }, [navigation]);

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        {isHasHistory ? (
          <IconButton
            icon={ArrowBackIcon}
            iconProps={iconProps}
            onPress={handleBack}
          />
        ) : (
          <IconButton
            icon={BurgerIcon}
            iconProps={iconProps}
            onPress={handleOpenDrawer}
          />
        )}
        <View style={styles.logo}>
          <Image
            source={require('@root/assets/images/logo.png')}
            resizeMode='contain'
            style={styles.logoImg}
          />
        </View>
        <IconButton
          icon={BasketIcon}
          onPress={handleOpenBasket}
          iconProps={{ ...iconProps, color: colors.primary }}
        />
      </SafeAreaView>
    </View>
  );
});

Header.displayName = 'Header';
