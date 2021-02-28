import React from "react"
import Header from "./header/Header"
import BlogList from "./mainBody/BlogList"
import Footer from "./footer/Footer"

function App(){
    return(
        <div>
            <Header />
            <BlogList />
            <hr className="finalLine"/>
            <Footer />
        </div>
    )
}

export default App