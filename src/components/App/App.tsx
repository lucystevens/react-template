import { HomePage, SampleForm } from 'components/pages';
import { Footer, NavigationBar, RoutedContent } from 'components/common';
import { path } from "utils/Routing";
import { Location } from 'history';
import './App.scss';

function App() {

  const authHandler = (location: Location): boolean => {
    console.log(`Checking auth for ${location.pathname}`)
    return sessionStorage.getItem("authed") === "true"
  }

  return (
        <div className="App">
          <NavigationBar 
            size={"md"}
            logoUrl="/images/logo.png"
            options={[
                {text: "Home", link: "/"},
                {text: "Form", link: "/form"},
                {text: "Dropdowns", dropdown: [
                  {text: "Dropdown 1", link: "/dropdown-1"},
                  {text: "Dropdown 2", link: "/dropdown-2"}
                ]},
                {text: "External", link: "https://www.google.com"},
            ]}/>

          <RoutedContent routing={
            path("/", { 
              component: <HomePage />, 
              routes: [
                path("form", { component: <SampleForm /> }),
                path("admin", { 
                  protectedBy: authHandler, 
                  routes: [
                    path("overview", { component: <div>Admin Overview</div> }),
                    path("users", { component: <div>Admin users</div> })
                  ]
                })
              ]
            })
          }/>

          <Footer/>
        </div>
  );
}

export default App;

