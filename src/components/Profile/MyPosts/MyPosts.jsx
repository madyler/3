import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import AddNewPostForm from "./AddNewPostForm";



const MyPosts = React.memo(({posts,addPost}) => {
    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}
                                                               key={p.id} id={p.id}/>);
    console.log('render')
    return (
        <div className={s.postsBlock}>
            <h3>My posts/Profile/</h3>
            <AddNewPostForm addPost={addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
)


export default MyPosts;