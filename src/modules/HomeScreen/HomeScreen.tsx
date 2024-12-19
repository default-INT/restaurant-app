import { SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View } from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { AppleIcon, GoogleIcon } from '@root/assets/icons';
import { Section } from './components/Section';
import { styles } from './styles';

export const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={backgroundStyle}
      >
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          <Section title='Step One'>
            Edit Some text
            {' '}
            <Text style={styles.highlight}>App.tsx</Text>
            {' '}
            to change this
            screen and then come back to see your edits.
          </Section>
          <Section title='See Your Changes'>
            <ReloadInstructions />
          </Section>
          <Section title='Debug'>
            <DebugInstructions />
          </Section>
          <Section title='Learn More'>
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
        <View>
          <Section title='Svg icon render'>
            <View style={{ backgroundColor: Colors.black, width: 80, height: 80 }}>
              <AppleIcon />
            </View>
            <View>
              <GoogleIcon width={80} height={80} />
            </View>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
