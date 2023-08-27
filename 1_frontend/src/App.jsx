import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './component/organism/Header';
import routes from './utils/routes';
import Footer from './component/organism/Footer/Footer';
import Loader from './component/atoms/Loader';
import { useAuth } from './context/AuthContext';
import ScrollToTop from './component/atoms/ScrollToTop';

function App() {
  const { currentUser } = useAuth();
  return (
    <>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          {Object.values(routes).map(({ path, getElement, isPrivate }) => {
            const LazyRouteComponent = lazy(getElement);

            if (isPrivate && currentUser.isAuthenticated) {
              return <Route key={path} path={path} element={<LazyRouteComponent />} />;
            } else if (!isPrivate) {
              return <Route key={path} path={path} element={<LazyRouteComponent />} />;
            } else return false;
          })}
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
