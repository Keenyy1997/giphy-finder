import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import MainApp from './App';
import ErrorMessage from './Components/Error';

/* Views */
import SearchGifs from './Views/SearchGifs';

function App() {
  return (
    <Router>
      <MainApp> 
        <Switch>        

          <Route path={ "/search" }>
            <SearchGifs/>
          </Route>

          <Route exact path={ "/" }>
            <Redirect to={ "/search" }/>
          </Route>

          <Route path={ "*" }>
            <ErrorMessage>
              ERROR: Route Not Found
            </ErrorMessage>
          </Route>

        </Switch>
      </MainApp>
    </Router>
  );
}

export default App;
