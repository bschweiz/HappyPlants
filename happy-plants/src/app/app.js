import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'context/auth-context';
import { UnathenticatedApp } from './unathenticated-app';
import { AuthenticatedAppProviders } from 'context';
import { AuthenticatedApp } from './authenticated-app';

function App() {
  const { app_user_id } = localStorage.getItem("app_user_id");

  return app_user_id ? (
    <AuthenticatedAppProviders>
      <AuthenticatedApp />
    </AuthenticatedAppProviders>
  ) : (
    <UnathenticatedApp />
  );
}

export { App };
