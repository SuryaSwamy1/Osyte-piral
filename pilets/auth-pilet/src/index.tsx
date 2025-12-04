import * as React from 'react';
import { Login } from './components/Login';
import { Signup } from './components/Signup';

export function setup(app: any) {
  app.registerPage('/login', () => (
    <Login
      onSuccess={() => {
        window.location.href = '/';
      }}
      onSwitchToSignup={() => {
        window.location.href = '/signup';
      }}
    />
  ));

  app.registerPage('/signup', () => (
    <Signup
      onSuccess={() => {
        window.location.href = '/';
      }}
      onSwitchToLogin={() => {
        window.location.href = '/login';
      }}
    />
  ));
}
