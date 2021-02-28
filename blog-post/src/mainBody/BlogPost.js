import React from "react"

function BlogPost(props){
    return(
        <div className="row">
            <div className="articlePreview">
            <a className="articleLink" href="https://startbootstrap.github.io/startbootstrap-clean-blog/post.html">
                <h2 className="articleTitle">{props.title}</h2>
                <h3 className="articleSubTitle">{props.subTitle}</h3>
          </a>

                <p className="articleInfo1">Author: {props.author}</p>
                <p className="articleInfo2">Date Posted: {props.date}</p>
                <hr />
            </div>
        </div>
    )
}

export default BlogPost