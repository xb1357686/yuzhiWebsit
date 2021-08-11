import { Route, Switch } from 'react-router-dom';

// components
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import HomePage from './pages/HomePage/HomePage';
import Home from './pages/Home/Home';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import Banner from "./pages/Banner/Banner";
import newsLi from "./pages/newsLi/newsLi";


function App() {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/solution" component={HomePage} />
          <Route exact path="/newsLi" component={newsLi} />
          <Route path="/page-not-found" component={NotFoundPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <Footer />

    </>
  );
}

export default App;
