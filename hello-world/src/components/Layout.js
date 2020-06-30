import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.css'
import layoutStyles from './layout.module.css'


function Layout({ children }) {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                { children }
            </div>
            <Footer />
        </div>
    )
}

export default Layout
