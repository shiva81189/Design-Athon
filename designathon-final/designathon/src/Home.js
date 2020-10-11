import React,{useState, useEffect} from 'react'
import Post from './Post'
import { db, auth } from './firebase'
import { Grid } from '@material-ui/core'
import './Home.css'

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
          setPosts(snapshot.docs.map(doc => ({
            id: doc.id,
            post: doc.data()
          })));
        })
      }, [])

    return (
       <div className='posts_container'>
            <Grid container >
            {
                posts.map(({ id, post }) => (
                <Post key={id} username={post.username} Category={post.Category} Location={post.Location} Skills={post.Skills} ApplyBy={post.ApplyBy} Duration={post.Duration} Salary={post.Salary} Role={post.Role} />
                ))
            }
            </Grid>
        </div>

    )
}

export default Home
