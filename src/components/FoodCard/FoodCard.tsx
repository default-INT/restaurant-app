import { Image, ListRenderItemInfo, StyleSheet, Text, View } from 'react-native';
import { IFood } from '@root/types/food';
import { AppButton } from '@root/components/AppButton';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { userStore } from '@root/store/userStore';
import { useCallback } from 'react';
import { IconButton } from '@root/components/IconButton';
import { MinusIcon, PlusIcon, TrashIcon } from '@root/assets/icons';
import { colors } from '@root/constants/colors';
import { styles } from './styles';

interface IProps {
  item: IFood
}

export const FoodCard = observer((props: IProps) => {
  const { item } = props;
  const { t } = useTranslation('home');
  const displayPrice = `${item.price}$`;
  const cartItem = userStore.getFoodById(item.id);
  const isExistInCart = Boolean(cartItem);

  const handleAddInCart = useCallback(() => {
    if (isExistInCart) return;

    userStore.addToCart(item);
  }, [isExistInCart, item]);

  const handleRemoveItem = useCallback(() => {
    userStore.removeFromCart(item.id);
  }, [item.id]);

  const handlePlusItem = useCallback(() => {
    userStore.updateFoodCount(item.id, prev => prev + 1);
  }, [item.id]);

  const handleMinusItem = useCallback(() => {
    userStore.updateFoodCount(item.id, prev => prev - 1);
  }, [item.id]);

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <View style={styles.imageContainer}>
          {item.imageUrl && (
            <Image
              source={typeof item.imageUrl === 'string' ? { uri: item.imageUrl } : item.imageUrl}
              style={styles.image}
              resizeMode='cover'
            />
          )}
          <View style={styles.footerContainer}>
            <View style={styles.price}>
              <Text style={styles.priceText}>{displayPrice}</Text>
            </View>
            {!isExistInCart && (
              <AppButton
                title={t('food_card.actions.add')}
                style={styles.button}
                onPress={handleAddInCart}
                textStyle={styles.buttonText}
              />
            )}
          </View>
        </View>
        {isExistInCart && (
          <View style={styles.manageItemContainer}>
            <View style={styles.counterContainer}>
              <IconButton
                icon={MinusIcon}
                style={styles.iconButton}
                iconProps={{ color: colors.textRevers }}
                onPress={handleMinusItem}
              />
              <View style={styles.countContainer}>
                <Text style={styles.countText}>{cartItem?.count}</Text>
              </View>
              <IconButton
                icon={PlusIcon}
                style={styles.iconButton}
                iconProps={{ color: colors.textRevers }}
                onPress={handlePlusItem}
              />
            </View>
            <IconButton
              icon={TrashIcon}
              style={StyleSheet.compose(styles.iconButton, styles.primaryIconButton)}
              onPress={handleRemoveItem}
              iconProps={{ color: colors.textPrimary }}
            />
          </View>
        )}
      </View>
      <Text>{item.name}</Text>
      <Text style={styles.secondaryText}>
        {t('food_card.weight', { value: item.weight })}
      </Text>
    </View>
  );
});

export const foodKetExtractor = (item: IFood) => `${item.id}`;

export const foodCardRenderItem = (listItem: ListRenderItemInfo<IFood>) => {
  const { item } = listItem;

  return <FoodCard item={item} />;
};

FoodCard.displayName = 'FoodCard';
