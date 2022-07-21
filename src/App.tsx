import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {LoginPage} from './components/LoginPage/LoginPage';
import {Test} from './components/Test/Test';
import {BookInterview} from "./components/BookInterView/BookInterview";

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/interview" element={<BookInterview/>}/>
            <Route path="/test" element={<Test/>}/>
            <Route path="*" element={<LoginPage/>}/>
        </Routes>
    );
};
