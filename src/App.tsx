import {Route, Routes, useNavigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {Home} from "./pages/Home/Home";

import {Auth} from "./pages/Auth/Auth";
import {useAuth} from "./hooks/useAuth";
import {lazy, Suspense, useEffect} from "react";
import {ProfileEdit} from "./pages/ProfileEdit/ProfileEdit";
import {FriendPage} from "./pages/Friends/FriendPage";
import Cookies from "js-cookie";
import {useActions} from "./hooks/useActions";
import {CommunitySearchPage} from "./pages/CommunitySearchPage/CommunitySearchPage";


const Profile = lazy(() => import("./pages/Profile/Profile")
    .then(({Profile}) => ({default: Profile}))
)

const Community = lazy(() => import("./pages/Community/Community")
  .then(({CommunityPage}) => ({default: CommunityPage}))
)

function App() {
  const navigate = useNavigate()
  const {user} = useAuth()

  const {checkAuthTC, logoutTC} = useActions()

  useEffect(() => {
    const accessToken = Cookies.get('accessToken')
    if (accessToken) checkAuthTC()
  }, [])

  useEffect(() => {
    const refreshToken = Cookies.get('refreshToken')
    if (!refreshToken && user) logoutTC()
  }, [])

  useEffect(() => {
    if (!user) {
      navigate('/auth')
    }
  }, [user])
  return (
    <Routes>
      <Route path={'/auth'} element={<Auth/>}/>
      <Route path="/" element={<MainLayout/>}>
        <Route path={"/"} element={<Home/>}/>
        <Route path={'/profile/:id'} element={
          <Suspense fallback={<div>Идет загрузка...</div>}>
            <Profile />
          </Suspense>
        }/>
        <Route path={'/group/:id'} element={
          <Suspense fallback={<div>Идет загрузка...</div>}>
            <Community />
          </Suspense>
        }/>
        <Route path={'/friends'} element={<FriendPage />}/>
        <Route path={'/groups'} element={<CommunitySearchPage />}/>
        <Route path={'/edit'} element={<ProfileEdit />}/>
      </Route>

    </Routes>
  );
}

export default App;
