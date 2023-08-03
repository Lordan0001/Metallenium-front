import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../Components/Band/Home";
import Album from "../Components/Album/Album";
import Publish from "../Components/Publish/Publish";

const Router = () =>{
    return <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path='/' />
            <Route element={<Album/>} path='/albums/:id' />
            <Route element={<Album/>} path='/albums' />
            <Route element={<Publish/>} path='/publish' />
            <Route path='*' element={<div>Not found</div>} />
        </Routes>
    </BrowserRouter>
}
export default Router;