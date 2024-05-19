import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import MainPage from "./pages/Main";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loading /> : <MainPage />}</>;
}

export default App;
