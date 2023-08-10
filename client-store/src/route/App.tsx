import {HashRouter, Routes, Route} from "react-router-dom";
import {LayoutMain} from "../layout/LayoutMain.tsx";
import {Login} from "../pages/Login.tsx";
import {NotFound} from "../pages/NotFound.tsx";
import {RegisterUser} from "../pages/RegisterUser.tsx";
import {LandingPage} from "../pages/LandingPage.tsx";

function App(){
  return (
    <HashRouter>
        <LayoutMain>
            <Routes>
                <Route path='/' element={<LandingPage/>} />
                <Route path='/login-user' element={<Login />}/>
                <Route path="/register-user" element={<RegisterUser />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </LayoutMain>
    </HashRouter>
  )
}

export default App
