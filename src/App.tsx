import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Button from '@material-ui/core/Button';

const Hello = () => {
  return (
    <Button variant="contained" color="primary">
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
