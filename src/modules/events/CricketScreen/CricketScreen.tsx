import { memo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import { EventTitle } from '@root/modules/events/components/EventTitle';
import { styles } from '@root/modules/events/RugbyScreen/styles';

export const CricketScreen = memo(() => {
  const { t } = useTranslation('events');

  return (
    <SafeAreaView edges={['bottom']} style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.dateText}>{t('cricket.title_date')}</Text>
        <EventTitle title={t('cricket.title')} />
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          <Trans
            i18nKey='events:cricket.description'
            components={{
              Cursive: <Text style={styles.cursive} />,
              Bold: <Text style={styles.bold} />,
            }}
          />
        </Text>
      </View>
    </SafeAreaView>
  );
});

CricketScreen.displayName = 'CricketScreen';
