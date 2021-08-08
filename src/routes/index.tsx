import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Redirector from '../components/Redirector';

import Room from '../pages/Room';
import { Home } from '../pages/Home';
import { NewRoom } from '../pages/NewRoom';

enum ERouteMap {
  Home = '/',
  Room = '/rooms',

  /** Requires "room_id" */
  CreateRoom = '/rooms/new',
}

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ERouteMap.Home} exact component={Home} />
        <Route path={ERouteMap.CreateRoom} component={NewRoom} />
        <Route path={`${ERouteMap.Room}/:room_id`} component={Room} />

        <Route
          path="*"
          component={() => <Redirector redirectTo={ERouteMap.Home} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export { Routes, ERouteMap };
