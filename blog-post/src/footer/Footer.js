import React from "react"
import * as FiIcons from "react-icons/fi"
import * as FaIcons from "react-icons/fa"
import * as ImIcons from "react-icons/im"

function Footer(){
    return(
        <div className="row2">
            <div className="footer">
                <a className="icon" href="https://startbootstrap.github.io/startbootstrap-clean-blog/#">
                    <FiIcons.FiTwitter />
                </a>
                <a className="icon" href="https://startbootstrap.github.io/startbootstrap-clean-blog/#">
                    <FaIcons.FaFacebook />
                </a>
                <a className="icon" href="https://startbootstrap.github.io/startbootstrap-clean-blog/#">
                    <ImIcons.ImGithub />
                </a>
            </div>
        </div>
    )
}

export default Footer