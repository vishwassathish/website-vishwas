import { useState } from 'react';
import Profile from '../ProfileSection/Profile';
import Publications from '../Publications/Publications';
import Patent from '../PatentsSection/Patent';
import Projects from '../ProjectSection/Projects';
import News from '../News/News';
export const HomeScreen = () => {
    return (
        <>
            <Profile />
            <News />
            <Publications />
            <Patent />
            <Projects />
        </>
    )
}

export default HomeScreen;