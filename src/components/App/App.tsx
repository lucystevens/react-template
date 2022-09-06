import { Switch, Route } from "react-router-dom";
import { HomePage } from 'components/pages';
import { Footer, NavigationBar } from 'components/common';
import { Box } from '@mui/material';
import './App.scss';

function App() {

  return (<>
        <div className="app">
          <NavigationBar 
            options={[
                {text: "Home", link: "/"},
                {text: "About", dropdown: [
                  {text: "Dropdown 1", link: "/dropdown-1"},
                  {text: "Dropdown 2", link: "/dropdown-2"}
                ]},
                {text: "External", link: "https://www.google.com"},
            ]}>
              <Box display={"flex"}>
                <a href="/">
                  <img className="logo" alt="CBP logo" src="/images/logo.png"/>
                </a>
              </Box>
          </NavigationBar>

          <Switch>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>

        <Footer/>
        </>
  );
}

export default App;
