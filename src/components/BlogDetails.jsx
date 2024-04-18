import React from "react";
import { NavLink } from "react-router-dom";


const BlogDetails = ( {post} ) => {
    return (
        <div className="flex flex-col justify-center items-center w-full ">
        <div className="max-w-[670px]">
            <NavLink to={`/blog/${post.id}`} >
                <span className="font-bold text-xl">{post.title}</span>
            </NavLink>
            <p>
                By
                <span className="italic "> {post.author} </span>
                On {" "}
                <NavLink to={`/category/${post.category.replaceAll(" ","-")}`} 
                className="font-bold underline">
                    <span> {post.category} </span>
                </NavLink>

            </p>

            <p>Posted on {post.date}</p>
            <p className="gap-y-10 my-4">{post.content}</p>
            <div>
                {
                post.tags.map((tag,index)=>
                (

                    <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}
                     className="text-blue-500 underline ml-1 ">
                        <span className="">{`#${tag}`}</span>
                    </NavLink>          
                )
                )}
            </div>
        </div>

        </div>
    )
} 
export default BlogDetails