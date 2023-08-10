import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Album from "../Pages/Album/Album";
import Manage from "../Pages/Manage/Manage";

const Router = () =>{
    return <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path='/' />
            <Route element={<Album/>} path='/albums/:id' />
            <Route element={<Album/>} path='/albums' />
            <Route element={<Manage/>} path='/manage' />
            <Route path='*' element={<div>Not found</div>} />
        </Routes>
    </BrowserRouter>
}
export default Router;