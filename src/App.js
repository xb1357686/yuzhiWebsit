import { Route, Switch, useLocation } from 'react-router-dom';


// components
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import HomePage from './pages/HomePage/HomePage';
import Home from './pages/Home/Home';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import Banner from "./pages/Banner/Banner";


function App() {
  const { pathname } = useLocation();
  console.log(pathname)
  return (
    <>
      <Header />
      <Banner />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/solution" component={HomePage} />
          <Route path="/page-not-found" component={NotFoundPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <Footer />

    </>
  );
}

export default App;
