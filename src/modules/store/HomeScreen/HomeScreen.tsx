import { memo, useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { foodMocks } from '@root/modules/store/HomeScreen/mocks';
import { CategoriesType } from '@root/types/food';
import { foodCardRenderItem, foodKetExtractor } from '@root/components/FoodCard';
import { CategoriesTab } from './components/CategoriesTab';
import { styles } from './styles';

export const HomeScreen = memo(() => {
  const [selectedFoodType, setSelectedFoodType] = useState(CategoriesType.Lunch);

  const handleChangeCategories = useCallback((type: CategoriesType) => {
    setSelectedFoodType(type);
  }, []);

  const filteredFoodList = foodMocks.filter(item => item.type === selectedFoodType);

  return (
    <SafeAreaView style={styles.root} edges={['bottom']}>
      <CategoriesTab selectedType={selectedFoodType} onChange={handleChangeCategories} />
      <FlatList
        data={filteredFoodList}
        keyExtractor={foodKetExtractor}
        renderItem={foodCardRenderItem}
      />
    </SafeAreaView>
  );
});

HomeScreen.displayName = 'HomeScreen';
