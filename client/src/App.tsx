import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import GameListPage from './pages/games/GameListPage';
import SoftwareListPage from './pages/software/SoftwareListPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import SoftwareFilterPage from "./pages/software/SoftwareFilterPage";
import GameFilterPage from "./pages/games/GameFilterPage";
import SoftwareDetailsPage from "./pages/software/SoftwareDetailsPage";
import GameDetailsPage from "./pages/games/GameDetailsPage";
import HomePage from './pages/home/HomePage';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/games">
            <GameListPage />
          </Route>
          <Route path="/games/id/:id">
            <GameDetailsPage />
          </Route>
          <Route path="/games/filter/:filter">
            <GameFilterPage />
          </Route>
          <Route exact path="/software">
            <SoftwareListPage />
          </Route>
          <Route path="/software/filter/:filter">
            <SoftwareFilterPage />
          </Route>
          <Route path="/software/id/:id">
            <SoftwareDetailsPage />
          </Route>
          <Route path="/home">
            <HomePage/>
          </Route>
          <Route exact path="/">
            <Redirect to="/games" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="games" href="/games">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>Games</IonLabel>
          </IonTabButton>
          <IonTabButton tab="software" href="/software">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Software</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
