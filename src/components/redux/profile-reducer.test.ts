import {ProfileType} from "../../types/types";
import profileReducer, {actions} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hello, do you really want it?', likesCount: 11},
        {id: 2, message: 'Yes, it\'s my first time!!!', likesCount: 28},
        {id: 3, message: 'I learn React by Dymych!', likesCount: 54},
        {id: 4, message: 'Congratulates!', likesCount: 2}
    ],
    profile: null as ProfileType | null,
    status: ""
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = actions.addPostActionCreator("it-kamasutra.com");
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts[4].message).toBe("it-kamasutra.com");
});

it('after deleting length of message should be decremen', () => {
    // 1. test data
    let action = actions.deletePost(1);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't  be decrement if id is correct`, () => {
    // 1. test data
    let action = actions.deletePost(1000);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(4);
});


















