import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarHook from './components/NavbarHook';
import Footer1 from './components/Footer1';
import Dashboard from './pages/Dashboard';
import Checklist from './pages/Checklist';
import Form from './pages/Form';
import { ChecklistProvider } from './contexts/ChecklistContext';
import './styles/global.css';
import './styles/NavbarHook.css'; // Ajout du CSS de NavbarHook
import './styles/Footer.css'; // Ajout du CSS de Footer1

const App = () => (
  <ChecklistProvider>
    <Router>
      <NavbarHook />
      <div className="content">
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/checklist/:id" component={Checklist} />
          <Route path="/form/:id?" component={Form} />
        </Switch>
      </div>
      <Footer1 />
    </Router>
  </ChecklistProvider>
);

export default App;
