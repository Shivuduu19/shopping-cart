import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header />
      <Main outlet={<Outlet />} />
      <Footer />
    </>
  );
}

export default App;
