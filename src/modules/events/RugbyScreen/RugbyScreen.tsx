import { memo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { EventTitle } from '@root/modules/events/components/EventTitle';
import { styles } from './styles';

export const RugbyScreen = memo(() => {
  const { t } = useTranslation('events');

  return (
    <SafeAreaView edges={['bottom']} style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.dateText}>{t('rugby.title_date')}</Text>
        <EventTitle title={t('rugby.title')} />
      </View>
      <Text style={styles.text}>{t('rugby.description')}</Text>
    </SafeAreaView>
  );
});

RugbyScreen.displayName = 'RugbyScreen';
