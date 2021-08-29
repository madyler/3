import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {AddNewPostFormRedux} from "./AddNewPostForm";


const MyPosts = React.memo(({posts, addPost}) => {
        let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}
                                                 key={p.id}/>);
        let onSubmit = (value) => {
            addPost(value.addNewPost);
        };
        return (
            <div className={s.postsBlock}>
                <h3>My posts/Profile/</h3>
                <AddNewPostFormRedux onSubmit={onSubmit}/>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        )
    }
)


export default MyPosts;