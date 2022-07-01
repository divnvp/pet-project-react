import React from 'react';
import { UIHeader } from './components/header/UIHeader';
import { Router } from './router/router';

export default function App () {
  return (
    <div>
      <UIHeader />

      <Router />
    </div>
  );
}