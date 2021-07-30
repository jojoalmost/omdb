import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Movies from "./pages/movies";
import {LoadingWrapper} from "./components/loading";

function App() {
  return (
      <React.Suspense fallback={<LoadingWrapper />}>
          <Switch>
              <Route path="/" component={Movies} />
              <Route render={() => <Redirect to="/" />} />
          </Switch>
      </React.Suspense>
  );
}

export default App;
