import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { SadSmileIcon } from '@root/assets/icons';
import { styles } from './styles';

export const EmptyCartPlaceholder = memo(() => {
  const { t } = useTranslation('basket_screen');

  return (
    <View style={styles.root}>
      <Text style={styles.mainText}>{t('empty_cart')}</Text>
      <SadSmileIcon width={150} height={150} />
    </View>
  );
});

EmptyCartPlaceholder.displayName = 'EmptyCartPlaceholder';
