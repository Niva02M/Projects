import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";
import Nav from "./Nav";

const Layout = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <Nav />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </Provider>
  );
};

export default Layout;
