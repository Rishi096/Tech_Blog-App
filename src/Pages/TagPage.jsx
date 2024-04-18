import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import Header from "../components/Header";

const TagPage = ()=>{

    const navigate = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    return(
        <div>
            <Header/>
            <div className="flex flex-col justify-center items-center">
            <div className=" mt-20 w-[670px]">
                <button onClick={() => navigate(-1)} className="border-2 border-gray-300 px-4 py-1 rounded-md">
                    Back</button>
                    <h2 className="">
                        Blogs Tagged <span className="font-bold "> #{tag}</span>
                    </h2>
            </div>
           <Blogs/>
           <Pagination/>
        </div>
        </div>
    )
}

export default TagPage