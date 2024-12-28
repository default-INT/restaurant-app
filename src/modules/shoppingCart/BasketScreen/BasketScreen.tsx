import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import { observer } from 'mobx-react-lite';
import { SafeAreaView } from 'react-native-safe-area-context';
import { foodCardRenderItem, foodKetExtractor } from '@root/components/FoodCard';
import { userStore } from '@root/store/userStore';
import { AppButton } from '@root/components/AppButton';
import { useCallback } from 'react';
import { CommonActions, StaticParamList, useNavigation } from '@react-navigation/native';
import { ShoppingCartNavigatorStack } from '@root/navigation/stack/ShoppingCartNavigatorStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { EmptyCartPlaceholder } from './components/EmptyCartPlaceholder';
import { styles } from './styles';

export const BasketScreen = observer(() => {
  const { t } = useTranslation('basket_screen');

  const navigation = useNavigation<NativeStackNavigationProp<StaticParamList<
    typeof ShoppingCartNavigatorStack
  >>>();

  const myFoodList = userStore.shoppingCart.map(cartItem => cartItem.food);
  const isItemsExist = Boolean(myFoodList.length);

  const totalPrice = userStore.shoppingCart.reduce(
    (acc, item) => acc + item.food.price * item.count,
    0,
  );

  const handleAcceptCart = useCallback(() => {
    navigation.navigate('SuccessOrder');
  }, [navigation]);

  const handleToMain = useCallback(() => {
    navigation.dispatch(CommonActions.reset({
      index: 0,
      routes: [{ name: 'StoreStack' }],
    }));
  }, [navigation]);

  return (
    <SafeAreaView style={styles.root} edges={['bottom']}>
      {isItemsExist ? (
        <FlatList
          data={myFoodList}
          keyExtractor={foodKetExtractor}
          renderItem={foodCardRenderItem}
        />
      ) : (<EmptyCartPlaceholder />)}
      {isItemsExist ? (
        <AppButton
          title={t('total_price', { value: totalPrice })}
          onPress={handleAcceptCart}
        />
      ) : (
        <AppButton
          title={t('common:to_main')}
          onPress={handleToMain}
        />
      )}
    </SafeAreaView>
  );
});

BasketScreen.displayName = 'BasketScreen';
