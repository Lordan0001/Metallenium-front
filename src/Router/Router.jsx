import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../Components/Band/Home";
import Album from "../Components/Album/Album";

const Router = () =>{
    return <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path='/' />
            <Route element={<Album/>} path='/albums/:id' />
            <Route path='*' element={<div>Not found</div>} />
        </Routes>
    </BrowserRouter>
}
export default Router;