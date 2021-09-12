import { Route, Switch, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";

// components
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import HomePage from './pages/HomePage/HomePage';
import Home from './pages/Home/Home';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import newsLi from "./pages/newsLi/newsLi";
import AboutUs from "./pages/AboutUs/AboutUs";
import Course from "./pages/course/course";
import Cyberpi from "./pages/cyberpi/cyberpi";
import Software from "./pages/Software/Software";


function App() {
  // const [isShow, setIsShow] = useState(true);
  // const { pathname } = useLocation();
  // useEffect(() => {
  //   if (pathname.includes('/newsList')) {
  //     setIsShow(false);
  //   } else {
  //     setIsShow(true);
  //   }
  // }, [pathname])
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path={window.ENV.URLPATHNAME} component={Home} />
          <Route exact path={`${window.ENV.URLPATHNAME}solution`} component={HomePage} />
          <Route exact path={`${window.ENV.URLPATHNAME}newsList`} component={newsLi} />
          <Route exact path={`${window.ENV.URLPATHNAME}aboutUs`} component={AboutUs} />
          <Route exact path={`${window.ENV.URLPATHNAME}course`} component={Course} />
          <Route exact path={`${window.ENV.URLPATHNAME}Cyberpi`} component={Cyberpi} />
          <Route exact path={`${window.ENV.URLPATHNAME}Software`} component={Software} />
          <Route exact path={`${window.ENV.URLPATHNAME}course`} component={Course} />
          <Route exact path={`${window.ENV.URLPATHNAME}software`} component={Software} />
          <Route path="/page-not-found" component={NotFoundPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <Footer />

    </>
  );
}

export default App;
