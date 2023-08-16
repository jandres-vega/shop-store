import {HashRouter, Routes, Route} from "react-router-dom";
import {LayoutMain} from "../layout/LayoutMain.tsx";
import {Login} from "../pages/Login.tsx";
import {NotFound} from "../pages/NotFound.tsx";
import {RegisterUser} from "../pages/RegisterUser.tsx";
import {LandingPage} from "../pages/LandingPage.tsx";
import { Profile } from '../pages/Profile.tsx';
import {routesPublic, routesPrivate} from '../utils/routes.ts';

function App(){
  return (
    <HashRouter>
        <LayoutMain>
            <Routes>
                <Route path={routesPublic.HOME} element={<LandingPage/>} />
                <Route path={routesPublic.LOGIN} element={<Login />}/>
                <Route path={routesPublic.REGISTER_USER} element={<RegisterUser />} />
                <Route path={routesPrivate.PROFILE} element={<Profile />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </LayoutMain>
    </HashRouter>
  )
}

export default App
