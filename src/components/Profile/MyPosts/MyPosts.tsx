import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {AddNewPostFormRedux, AddPostFormValuesType} from "./AddPostForm";
import {PostType} from "../../../types/types";

export type MapPropsType = {
    posts: Array<PostType>
}
export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = ({posts, addPost}) => {
    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}
                                             key={p.id}/>);
    let onSubmit = (value: AddPostFormValuesType) => {
        addPost(value.newPostText);
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


const MyPostsMemorized = React.memo(MyPosts)

export default MyPostsMemorized;