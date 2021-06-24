import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Redirector from '../components/Redirector';

import { Home } from '../pages/Home';
import { NewRoom } from '../pages/NewRoom';

enum ERouteMap {
  Home = '/',
  CreateRoom = '/rooms/new',
}

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ERouteMap.Home} exact component={Home} />
        <Route path={ERouteMap.CreateRoom} component={NewRoom} />

        <Route
          path="*"
          component={() => <Redirector redirectTo={ERouteMap.Home} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export { Routes, ERouteMap };
