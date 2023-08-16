
import styles from './blog.module.css';
import blogData from '../lib/blogData.json';
import Link from 'next/link';

export default function Blog(){
    return(
        <div>
            <h1 className={styles.textCenter}>Blog post page</h1>
            <div className="row ">
                {
                    blogData.map((data) => {
                        return(
                            <div className="col-md-4 mt-2">
                                <Link key={data.id} href={{ pathname:"/post",query:{id:data.id} }}>                            
                                    <div className='card'>
                                        <div className="card-body">
                                            <p>{data.id}</p>
                                            <h2 className="card-title">{data.title}</h2>
                                            <p>{data.content}</p>
                                            <p>{data.date}</p>
                                        </div>
                                    </div>                 
                                </Link>
                            </div>
                        )
                    })
                }            
             
            </div>
        </div>
    )
}