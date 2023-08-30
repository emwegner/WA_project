import logo from './logo.svg';
import './App.css';

import '@ionic/react/css/core.css';
import { IonApp, IonContent, IonHeader, IonToolbar, IonTitle, IonFooter} from '@ionic/react'

import Navbar from './Components/Navbar';
import Home from './Tabs/Home';
import About from './Tabs/About';
import Games from './Tabs/Games';
import Devs from './Tabs/Developers';

import { BrowserRouter as Router , Route, Switch} from 'react-router-dom/cjs/react-router-dom.min';

/*
function App() {
  return (
    <IonApp>
      <IonContent>
  
        <Router>
          <div className="App">
          <Navbar />
            <div className="content">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>

                <Route path="/games">
                  <Games />
                </Route>

                <Route path="/devs">
                  <Devs />
                </Route>

                <Route path="/about">
                  <About />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>

      </IonContent>
    </IonApp>

  );
}
*/
function App() {
  return(
    <IonApp>
          <IonHeader>
        <IonToolbar>
          <IonTitle>Header Toolbar</IonTitle>
        </IonToolbar>
        
      </IonHeader>  
<IonContent>
<Router>
          <div className="App">
          <Navbar />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>

                <Route path="/games">
                  <Games />
                </Route>

                <Route path="/devs">
                  <Devs />
                </Route>

                <Route path="/about">
                  <About />
                </Route>
              </Switch>
            </div>
        </Router>
  
</IonContent>
<IonFooter>
        <IonToolbar>
          <IonTitle>Footer Toolbar</IonTitle>
        </IonToolbar>
      </IonFooter>
      
    </IonApp>
  );
}

export default App;
