import './App.css';
import MenuList from './containers/Menu';
import FilmsList from './containers/FilmList';
import Footer from './containers/Footer';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Details from './containers/Details';
import NotFound from './containers/NotFound';
import './file/fonts.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddFilm from './containers/AddFilm';

function App() {
  const [token, setToken] = useState(null);
  const [draftValue, setDraftValue] = useState('');

  function logout() {
    setToken(null);
  }
  /* films={tabFilms} */
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <MenuList
                  token={token}
                  setToken={setToken}
                  draftValue={draftValue}
                  setDraftValue={setDraftValue}
                  logout={logout}
                />
                <FilmsList draftValue={draftValue} />
                <Footer />
              </div>
            }
          />
          <Route
            path="/signin"
            element={
              <div>
                <MenuList
                  token={token}
                  setToken={setToken}
                  draftValue={draftValue}
                  setDraftValue={setDraftValue}
                  logout={logout}
                />
                <SignIn token={token} setToken={setToken} />
                <Footer />
              </div>
            }
          />
          <Route
            path="/signup"
            element={
              <div>
                <MenuList
                  token={token}
                  setToken={setToken}
                  draftValue={draftValue}
                  setDraftValue={setDraftValue}
                  logout={logout}
                />
                <SignUp />
                <Footer />
              </div>
            }
          />
          <Route
            path="/details/:id"
            element={
              <div>
                <MenuList
                  token={token}
                  setToken={setToken}
                  draftValue={draftValue}
                  setDraftValue={setDraftValue}
                  logout={logout}
                />
                <Details />
                <Footer />
              </div>
            }
          />
          <Route
            path="/addfilm"
            element={
              <div>
                <MenuList
                  token={token}
                  setToken={setToken}
                  draftValue={draftValue}
                  setDraftValue={setDraftValue}
                  logout={logout}
                />
                <AddFilm />
                <Footer />
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div>
                <MenuList
                  token={token}
                  setToken={setToken}
                  draftValue={draftValue}
                  setDraftValue={setDraftValue}
                  logout={logout}
                />
                <NotFound />
                <Footer />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
