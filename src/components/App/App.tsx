import './App.css';
import NavigationBar from 'components/NavigationBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Box } from '@material-ui/core';
import HomePage from 'components/pages/HomePage/HomePage';

function App() {

  return (
    <Router>
      <NavigationBar 
        options={[
            {text: "Home", link: "/"}
        ]}>
          <Box display={"flex"}></Box>
      </NavigationBar>

        <Switch>
          <Route path="/">
            <HomePage></HomePage>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
