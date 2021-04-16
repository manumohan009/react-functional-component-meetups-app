import { Route, Switch } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/favorites" exact>
          <FavoritesPage />
        </Route>
        <Route path="/new-meetup" exact>
          <NewMeetupPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
