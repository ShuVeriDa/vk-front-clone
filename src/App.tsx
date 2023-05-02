import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {Home} from "./pages/Home/Home";

import {Auth} from "./pages/Auth/Auth";
import {useAuth} from "./hooks/useAuth";
import {lazy, Suspense, useEffect} from "react";

import {FriendPage} from "./pages/Friends/FriendPage";
import Cookies from "js-cookie";
import {useActions} from "./hooks/useActions";
import {CommunitySearchPage} from "./pages/CommunitySearchPage/CommunitySearchPage";
import {CreateCommunity} from "./pages/CreateCommunity/CreateCommunity";
import {PhotosPage} from "./pages/Photos/Photos";


const Profile = lazy(() => import("./pages/Profile/ProfilePage")
    .then(({ProfilePage}) => ({default: ProfilePage}))
)

const Community = lazy(() => import("./pages/Community/Community")
  .then(({CommunityPage}) => ({default: CommunityPage}))
)

const ProfileEdit = lazy(() => import("./pages/ProfileEdit/ProfileEditPage")
  .then(({ProfileEditPage}) => ({default: ProfileEditPage}))
)

const CommunityEdit = lazy(() => import("./pages/CommunityEdit/CommunityEditPage")
  .then(({CommunityEditPage}) => ({default: CommunityEditPage}))
)

const Photos = lazy(() => import("./pages/Photos/Photos")
  .then(({PhotosPage}) => ({default: PhotosPage}))
)

const CreateAlbum = lazy(() => import("./components/ModalWindow/ModalWindow")
  .then(({ModalWindow}) => ({default: ModalWindow}))
)




const NotFound = lazy(() => import(/* webpackChunkName: "NotFound"*/ './pages/NotFound/NotFound')
  .then(({NotFound}) => ({default: NotFound}))
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
      <Route path={'/groups/create'} element={<CreateCommunity />}/>
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

        <Route path={'/edit'} element={
          <Suspense fallback={<div>Идет загрузка...</div>}>
            <ProfileEdit />
          </Suspense>
        }/>
        <Route path={'/group/:id/edit'} element={
          <Suspense fallback={<div>Идет загрузка...</div>}>
            <CommunityEdit />
          </Suspense>
        }/>
        <Route path={'/photos'} element={
          <Suspense fallback={<div>Идет загрузка...</div>}>
            <Photos />
          </Suspense>
        }/>
      </Route>
      <Route path={'/404'}
             element={
               <Suspense fallback={<div>Идет загрузка...</div>}>
                 <NotFound/>
               </Suspense>}
      />
      <Route path="*" element={ <Navigate to="/404" replace />} />

    </Routes>
  );
}

export default App;
