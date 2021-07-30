import * as React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import {LoadingWrapper} from "../../components/loading";

const List = React.lazy(() => import(/* webpackChunkName: 'list' */ './list'));
const Detail = React.lazy(() => import(/* webpackChunkName: 'detail' */ './detail'));

const Routes = () => (
    <React.Suspense fallback={<LoadingWrapper/>}>
        <Switch>
            <Route path="/" component={List} exact/>
            <Route path="/movie/:movieId" component={Detail}/>
            <Route render={() => <Redirect to="/"/>}/>
        </Switch>
    </React.Suspense>
);

export default Routes;
