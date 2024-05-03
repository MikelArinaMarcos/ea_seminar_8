import React, { useState } from 'react';
import './App.css';
import { IUser } from './modules/user'
import GetUsers from './GET/getUsers';
import UpdateUser from './PUT/updateUser';
import CreateUser from './POST/createUser';
import '@fontsource/inter';
import GetPosts from './GET/getPosts';
import CreatePost from './POST/createPost';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



function NavigationBar() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/users">Users</NavLink></li>
                <li><NavLink to="/posts">Posts</NavLink></li>
            </ul>
        </nav>
    );
}


function AppUser() {

    const [usersUpdated, setUsersUpdated] = useState(false);
    const [postsUpdated, setPostsUpdated] = useState(false);
    const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

    const resetUser = () => {
        setSelectedUser(null);
    }

    const updateUserList = () => {
        setUsersUpdated(!usersUpdated);
    };

    const updatePostList = () => {
        setPostsUpdated(!postsUpdated);
    };

    return (
        <div className="container" >
            <div className="title">
                <h1 >Database Users</h1>
            </div>
            <BrowserRouter>
                <NavigationBar />
                <Routes>
                    <Route path='/' />
                    <Route path="/users" element={
                        <>
                            <GetUsers usersUpdated={usersUpdated} setSelectedUser={setSelectedUser} />
                            <UpdateUser user={selectedUser} updateUserList={updateUserList} resetUser={resetUser} />
                            <CreateUser updateUserList={updateUserList} />
                        </>
                    } />
                    <Route path="/posts" element={
                        <>
                            <GetPosts postsUpdated={postsUpdated} />
                            <CreatePost updatePostList={updatePostList} />
                        </>
                    } />
                </Routes>
            </BrowserRouter>
        </div>
    );

}

export default AppUser;