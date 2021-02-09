import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';

// Font
import 'fontsource-roboto';
// Button example
import Button from '@material-ui/core/Button';
// Icon example
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

const Hello = () => {
  return (
    <Button variant="contained" color="primary">
      <AccessAlarmIcon />
      Hello World
    </Button>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
