import React from 'react';
import "./index.css";
// Components
import { UIHeader } from './components/header/UIHeader';
import { Router } from './router/router';

export default function App () {
  return (
    <div>
      <div className="u-i-header">
        <UIHeader />
      </div>

      <Router />
    </div>
  );
}
