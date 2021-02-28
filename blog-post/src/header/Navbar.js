import React from "react"

function Navbar(){
    return(
        <div className="topNav">
            <h2 className="navLinks" id="company">Start Up Bootstrap</h2>
            <a className="navLinks1" href="https://startbootstrap.github.io/startbootstrap-clean-blog/index.html">HOME</a>
            <br/>
            <a className="navLinks2" href="https://startbootstrap.github.io/startbootstrap-clean-blog/about.html">ABOUT</a>
            <br/>
            <a className="navLinks3" href="https://startbootstrap.github.io/startbootstrap-clean-blog/post.html">SAMPLE POST</a>
            <br/>
            <a className="navLinks4" href="https://startbootstrap.github.io/startbootstrap-clean-blog/contact.html">CONTACT</a>
            <br/>
        </div>
    )
}

export default Navbar