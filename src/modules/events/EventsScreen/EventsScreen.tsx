import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { AppButton } from '@root/components/AppButton';
import { EventsNavigatorRoutes } from '@root/navigation/stack/EventsNavigatorStack/types';
import { styles } from './styles';

export const EventsScreen = memo(() => {
  const { t } = useTranslation('events');
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView edges={['bottom']} style={styles.root}>
      <AppButton
        title={t('sections.games')}
        style={styles.button}
        textStyle={styles.buttonText}
        onPress={() => navigation.navigate(EventsNavigatorRoutes.Games)}
      />
      <AppButton
        title={t('sections.cinema_and_dinner')}
        style={styles.button}
        textStyle={styles.buttonText}
        onPress={() => navigation.navigate(EventsNavigatorRoutes.CinemaAndDinner)}
      />
      <AppButton
        title={t('sections.rugby')}
        style={styles.button}
        textStyle={styles.buttonText}
        onPress={() => navigation.navigate(EventsNavigatorRoutes.RugbyDay)}
      />
      <AppButton
        title={t('sections.cricket')}
        style={styles.button}
        textStyle={styles.buttonText}
        onPress={() => navigation.navigate(EventsNavigatorRoutes.CricketDay)}
      />
    </SafeAreaView>
  );
});

EventsScreen.displayName = 'EventsScreen';
