import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { Provider } from "react-redux";
import store from "./state/store";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Main outlet={<Outlet />} />
        <Footer />
        <Cart />
      </Provider>
    </>
  );
}

export default App;
