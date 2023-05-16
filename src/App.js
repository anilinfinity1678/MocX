import Login from "./Login/Login";
import React from "react";
import Registration from "./Registration/Registration";
import Home from "./Home/Home";
import ILETS from "./MainApp/Categories/ILETS/ILETS";
import Job from "./MainApp/Categories/JOB/Job";
import Mock from "./MainApp/Categories/MOCKIIM/Mock";
import Main from "./Main/Main";
import CatSelction from "./MainApp/CategorySelction/CatSelction";
import Profile from "./MainApp/Profile/Profile";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/ilets" element={<ILETS />}></Route>
                <Route path="/job" element={<Job />}></Route>
                <Route path="/mockiim" element={<Mock />}></Route>
                <Route
                    path="/login/registration"
                    element={<Registration />}
                ></Route>
                <Route path="/category" element={<CatSelction />} />
                <Route path="/login" element={<Login />}></Route>
                <Route path="/main" element={<Main />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
            </Routes>
        </>
    );
}

export default App;
