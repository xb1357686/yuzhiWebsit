import { Route, Switch, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";

// components
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import HomePage from './pages/HomePage/HomePage';
import Home from './pages/Home/Home';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import Banner from "./pages/Banner/Banner";
import newsLi from "./pages/newsLi/newsLi";
import AboutUs from "./pages/AboutUs/AboutUs";


function App() {
  const [isShow, setIsShow] = useState(true);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname.includes('/newsList')) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }, [pathname])
  return (
    <>
      <Header />
      {isShow && <Banner />}
      <main>
        <Switch>
          <Route exact path={window.ENV.URLPATHNAME} component={Home} />
          <Route exact path={`${window.ENV.URLPATHNAME}solution`} component={HomePage} />
          <Route exact path={`${window.ENV.URLPATHNAME}newsList`} component={newsLi} />
          <Route exact path={`${window.ENV.URLPATHNAME}AboutUs`} component={AboutUs} />
          <Route path="/page-not-found" component={NotFoundPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <Footer />

    </>
  );
}

export default App;
