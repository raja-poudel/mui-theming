import React, { useState} from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { SideBar } from './SideBar';
export const MainLayout = ({children  }) => {
    const [ openSideBar, setOpenSideBar ] = useState(false);
    return (
        <>
            <Header openSideBar={() => setOpenSideBar((prev) => !prev)}/>
            <SideBar open={openSideBar} closeSideBar={() => setOpenSideBar(false)}/>
                {children}
            <Footer />
        </>
    )
}