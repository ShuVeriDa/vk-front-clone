import {Route, Routes, useNavigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {Home} from "./pages/Home/Home";
import {Profile} from "./pages/Profile/Profile";
import {Auth} from "./pages/Auth/Auth";
import {useAuth} from "./hooks/useAuth";
import {useEffect} from "react";


function App() {
  const navigate = useNavigate()
  const {user} = useAuth()

  useEffect(() => {
    if (!user) {
      navigate('/auth')
    }
  }, [user])
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
