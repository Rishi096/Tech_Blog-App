import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Home from "./Pages/Home";
import TagPage from "./Pages/TagPage";
import BlogsPage from "./Pages/BlogsPage";
import CategoryPage from "./Pages/CategoryPage";
import { Routes,Route, useSearchParams, useLocation } from "react-router-dom";


export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
 const [searchParams,setSearchParams] = useSearchParams();
 const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    // tag ki call hui hai
    if(location.pathname.includes("tags")){
      // iska matlab tag wala page show krna h 
           
      // last wale slace ke baad jo value pdi h usko nikalna hai 
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      console.log(tag);

      fetchBlogPosts(Number(page),tag);
    }
  // agar category ki call gyi ho
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),null,category);
    }
    else{
      // Normal call gyi Ho
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname,location.search]);

  return (
  <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/blog/:blogId" element={<BlogsPage/>}/>
       <Route path="/tags/:tag" element={<TagPage />} />
       <Route path="/category/:category" element={<CategoryPage />}/>
  </Routes>
  );
}
