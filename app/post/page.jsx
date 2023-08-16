import styles from './post.module.css'
import blogData from "../lib/blogData";

let getPost = (id) =>{
    let data = blogData.filter((item) => item.id === id);
    return data;
}

export default function Post({searchParams}){
    const id = searchParams.id;
    let data = getPost(id);
    return(
        <div>
            <h1 className={styles.postDetailsHeader}>Single post details page</h1>
            <div>
                {
                  data.map((post) => {
                    return(
                        <div key={post.id}>
                            <span><h3>Post ID: {post.id}</h3> Date : <h4>{post.date}</h4></span>                            
                            <h3>Post Title: {post.title}</h3>
                            <p>{post.content}</p>
                        </div>
                    )
                  })  
                }
            </div>
        </div>
    )
}