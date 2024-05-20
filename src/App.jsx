import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import MainPage from "./pages/Main";
import Gnb from "./components/Gnb";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Gnb />
          <MainPage />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
