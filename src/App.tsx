import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {Home} from "./pages/Home/Home";
import {Profile} from "./pages/Profile/Profile";


function App() {
   return (
      <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path={"/"} element={<Home />} />
              <Route path={'/profile'} element={<Profile />}/>
            </Route>
      </Routes>
   );
}

export default App;
