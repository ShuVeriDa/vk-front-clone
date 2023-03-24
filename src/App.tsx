import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {Home} from "./pages/Home/Home";
import {Profile} from "./pages/Profile/Profile";
import {Auth} from "./pages/Auth/Auth";


function App() {
   return (
      <Routes>
            <Route path={'/auth'} element={<Auth />} />
            <Route path="/" element={<MainLayout />}>
              <Route path={"/"} element={<Home />} />
              <Route path={'/profile'} element={<Profile />}/>
            </Route>
      </Routes>
   );
}

export default App;
