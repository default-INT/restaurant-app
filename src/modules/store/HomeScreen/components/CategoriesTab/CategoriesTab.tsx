import { memo, useMemo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import { OpacityPressable } from '@root/components/OpacityPressable';
import { CategoriesType } from '@root/types/food';
import { styles } from './styles';

interface IProps {
  selectedType: CategoriesType
  onChange: (selectedType: CategoriesType) => void
}

const getTabs = (t: TFunction) => [
  {
    value: CategoriesType.Brunch,
    title: t('categories.brunch'),
    source: require('@root/assets/images/brunch.png'),
  },
  {
    value: CategoriesType.Lunch,
    title: t('categories.lunch'),
    source: require('@root/assets/images/lunch.png'),
  },
  {
    value: CategoriesType.Dessert,
    title: t('categories.dessert'),
    source: require('@root/assets/images/dessert.png'),
  },
];

export const CategoriesTab = memo((props: IProps) => {
  const { t } = useTranslation('home');
  const { selectedType, onChange } = props;
  const categories = useMemo(() => getTabs(t), [t]);

  return (
    <View style={styles.container}>
      {categories.map(item => (
        <OpacityPressable
          key={item.value}
          layoutStyle={styles.item}
          onPress={() => onChange(item.value)}
        >
          <View
            style={StyleSheet.compose(
              styles.imageContainer,
              selectedType === item.value && styles.selectedImage,
            )}
          >
            <Image
              source={item.source}
              resizeMode='contain'
              style={styles.image}
            />
          </View>
          <Text
            style={StyleSheet.compose(
              styles.text,
              selectedType === item.value && styles.selectedText,
            )}
          >
            {item.title}
          </Text>
        </OpacityPressable>
      ))}
    </View>
  );
});

CategoriesTab.displayName = 'CategoriesTab';
