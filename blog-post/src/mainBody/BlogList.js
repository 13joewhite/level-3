import React from "react"
import BlogPost from "./BlogPost"
import blogPostData from "../blogPostData"

function BlogList(){
    const articles = blogPostData.map(post => <BlogPost key={post.id} title={post.title} subTitle={post.subTitle} author={post.author} date={post.date} />)
    return(
        <div className="container">
            {articles}
                <div className="row">
                    <div className="olderPost">
                        <a href="https://startbootstrap.github.io/startbootstrap-clean-blog/#">
                            <button className="button" href="https://startbootstrap.github.io/startbootstrap-clean-blog/#">Older Posts →</button>
                        </a>
                    </div>
                </div>
        </div>
    )
}

export default BlogList