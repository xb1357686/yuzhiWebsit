import { Route, Switch } from 'react-router-dom';

// components
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import HomePage from './pages/HomePage/HomePage';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/page-not-found" component={NotFoundPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <Footer />
      
    </>
  );
}

export default App;
