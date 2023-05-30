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
import {AlbumsPage} from "./pages/Albums/Albums";


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

const Albums = lazy(() => import("./pages/Albums/Albums")
  .then(({AlbumsPage}) => ({default: AlbumsPage}))
)

const AlbumItemPage = lazy(() => import("./pages/AlbumItemPage/AlbumItemPage")
  .then(({AlbumItemPage}) => ({default: AlbumItemPage}))
)

const AlbumEdit = lazy(() => import("./pages/AlbumEdit/AlbumEdit")
  .then(({AlbumEdit}) => ({default: AlbumEdit}))
)

const CreatePhotoInAlbum = lazy(() => import("./pages/CreatePhotoInAlbum/CreatePhotoInAlbum")
  .then(({CreatePhotoInAlbum}) => ({default: CreatePhotoInAlbum}))
)

const CreatePhoto = lazy(() => import("./pages/CreatePhoto/CreatePhoto")
  .then(({CreatePhoto}) => ({default: CreatePhoto}))
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
      <Route path={'/groups/create'} element={<CreateCommunity/>}/>
      <Route path="/" element={<MainLayout/>}>
        <Route path={"/"} element={<Home/>}/>
        <Route path={'/profile/:id'} element={
          <Suspense fallback={<div>Идет загрузка...</div>}>
            <Profile/>
          </Suspense>
        }/>
        <Route path={'/group/:id'} element={
          <Suspense fallback={<div>Идет загрузка...</div>}>
            <Community/>
          </Suspense>
        }/>
        <Route path={'/friends'} element={<FriendPage/>}/>

        <Route path={'/groups'} element={<CommunitySearchPage/>}/>


        <Route path={'/profile/edit'} element={
          <Suspense fallback={<div>Идет загрузка...</div>}>
            <ProfileEdit/>
          </Suspense>
        }/>
        <Route path={'/group/:id/edit'} element={
          <Suspense fallback={<div>Идет загрузка...</div>}>
            <CommunityEdit/>
          </Suspense>
        }/>
        <Route path={'/albums'} element={
          <Suspense fallback={<div>Идет загрузка...</div>}>
            <Albums/>
          </Suspense>
        }/>

        {/*<Route path={'/albums/photo/:id'} element={*/}
        {/*  <Suspense fallback={<div>Идет загрузка...</div>}>*/}
        {/*    <Albums/>*/}
        {/*  </Suspense>*/}
        {/*}/>*/}
        <Route path={'/album/:id'} element={
          <Suspense fallback={<div>Идет загрузка...</div>}>
            <AlbumItemPage/>
          </Suspense>
        }/>

        <Route path={'/album/:id/edit'} element={
          <Suspense fallback={<div>Идет загрузка...</div>}>
            <AlbumEdit/>
          </Suspense>
        }/>



        <Route path={'/album/photo/add'} element={
          <Suspense fallback={<div>Идет загрузка...</div>}>
            <CreatePhoto/>
          </Suspense>
        }/>

        <Route path={'/album/:id/add'} element={
          <Suspense fallback={<div>Идет загрузка...</div>}>
            <CreatePhotoInAlbum/>
          </Suspense>
        }/>
      </Route>

      <Route path={'/404'}
             element={
               <Suspense fallback={<div>Идет загрузка...</div>}>
                 <NotFound/>
               </Suspense>}
      />
      <Route path="*" element={<Navigate to="/404" replace/>}/>

    </Routes>
  );
}

export default App;
