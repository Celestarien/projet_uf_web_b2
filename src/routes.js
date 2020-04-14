import { routerActions } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';

import ProfilePage from './containers/ProfilePage';

// Redirects to /login by default
const UserIsAuthenticated = UserAuthWrapper({
    authSelector: state => state.auth, // how to get the user state
    predicate: (auth) => auth.isAuthenticated, // function to run against the auth state to determine if authenticated
    redirectAction: routerActions.replace, // the redux action to dispatch for redirect
    wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
});

export default (
    <Route path="/" component={App}>
        <Route path="profile" component={UserIsAuthenticated(ProfilePage)} />
    </Route>
);