import "./App.css";
import Signup from "./comps/signup/Signup";
import Dashboard from "./comps/Dashboard/Dashboard";
import { Provider } from "react-redux";
import mainStore from "./store/ReduxStore";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={mainStore}>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
