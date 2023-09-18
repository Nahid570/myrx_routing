import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicNavigator from "./PublicNavigator";
import DBCredential from "../components/DBCredential";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Home from "../components/Home";
import Setting from "../components/Setting";
import ProtectedNavigator from "./ProtectedNavigator";

const RootNavigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="db-credential" element={<DBCredential />} />

          <Route element={<PublicNavigator />}>
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>

          <Route element={<PublicNavigator />}>
            <Route element={<ProtectedNavigator />}>
              <Route index element={<Home />} />
              <Route path="setting" element={<Setting />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigator;
