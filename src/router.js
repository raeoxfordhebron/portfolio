import { createBrowserRouter, createRoutesFromElements, Route  } from "react-router-dom";
import App from "./App"


const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
        </Route>
    </>
))