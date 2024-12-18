import { Navigate, Route, Routes } from "react-router-dom"

import Layout from "./Layout/Layout"

import HomePage from "./pages/HomePage"
import PageNotFound from "./pages/PageNotFound"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import AboutMe from "./pages/AboutMe"
import ContactUs from "./pages/ContactUs"


function App() {


  return (
    <>
     <Layout>
       <Routes>
        <Route index element={<Navigate to="/home" replace />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/about-me" element={<AboutMe />}/>
        <Route path="/contact-us" element={<ContactUs />}/>
        <Route path="/*" element={<PageNotFound />}/>
       </Routes>
     </Layout>
    </>
  )
}

export default App
