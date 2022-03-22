import { Switch, Route, Link } from '@modern-js/runtime/router';
import { useModuleApps } from '@modern-js/runtime';

import './App.css';

const App: React.FC = () => {
  const { Activity } = useModuleApps();

  return (
    <div>
      <div>
        <Link to="/activity">Activity</Link> &nbsp;
      </div>
      <Switch>
        <Route path="/activity" exact={true}>
          <Activity />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
