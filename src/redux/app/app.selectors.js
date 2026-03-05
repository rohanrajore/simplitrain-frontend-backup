import { createSelector } from 'reselect';

const appState = state => state.app;

export const redirectToLink = createSelector(
    [appState],
    app => app.redirectTo
);

export const isLoggedInCheck = createSelector(
    [appState],
    app => app.isLoggedIn
);
