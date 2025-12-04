import * as React from 'react';
import { useLocation } from 'react-router-dom';
import App from './App';

export const layout = {
  Layout: ({ children }: any) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    if (isHomePage) {
      return <App />;
    }

    return <>{children}</>;
  },
};

export const errors = {
  NotFound: () => (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404 - Page Not Found</h1>
    </div>
  ),
};
