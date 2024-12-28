/* eslint-disable global-require */
import { memo, PropsWithChildren } from 'react';
import { ImageBackground } from 'react-native';
import { EventsNavigatorRoutes } from '../../types';

const mapBackgroundByRoute = {
  [EventsNavigatorRoutes.Events]: require('../../assets/event-list.png'),
  [EventsNavigatorRoutes.CinemaAndDinner]: require('../../assets/cinema-and-dinner.png'),
  [EventsNavigatorRoutes.Games]: require('../../assets/games.png'),
  [EventsNavigatorRoutes.RugbyDay]: require('../../assets/sport-layout.png'),
  [EventsNavigatorRoutes.CricketDay]: require('../../assets/sport-layout.png'),
};

export const EventsLayout = memo((props: PropsWithChildren<any>) => {
  const { children, state } = props;
  const currentRoute = state.routes[state.index].name as EventsNavigatorRoutes;
  const source = mapBackgroundByRoute[currentRoute];

  if (!source) return children;

  return (
    <ImageBackground
      source={source}
      resizeMode='cover'
      style={{ flex: 1 }}
    >
      {children}
    </ImageBackground>
  );
});

export const eventLayout = (props: any) => <EventsLayout {...props} />;

EventsLayout.displayName = 'EventsLayout';
