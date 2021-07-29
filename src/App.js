import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Movies from "./page/movies";
import {Loading} from "./components/loading";

function App() {
  return (
      <React.Suspense fallback={<Loading />}>
          <Switch>
              <Route path="/" component={Movies} />
              <Route render={() => <Redirect to="/" />} />
          </Switch>
      </React.Suspense>
  );
}

export default App;
