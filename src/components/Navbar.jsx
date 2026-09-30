import { useState, useEffect } from 'react'
import logo from '../assets/Firefly.png'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'


const Navbar = () => {
    const [isToggled,setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(prev => !prev);
    }
    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 769px)');

        const handleChange = (e) => {
            if (e.matches) {
                setToggle(false);
            }
        };

        // 初始化時先檢查一次
        if (mediaQuery.matches) {
            setToggle(false);
        }

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);
  return (
    <nav className="nav">
        <div className="container nav-flex">
            <img src={logo} alt="logo" className="logo" />
            <div className="main-menu">
                <PageLinks groupClass="main-menu-list" />
            </div>
            <SocialLinks groupClass="nav-icon"/>
            
            <div className="mobile-menu">
                <div className="mobile-menu-toggle">
                    <i className="fa-solid fa-bars" onClick={handleToggle}></i>
                    <div className={isToggled ? "mobile-menu-items active" : "mobile-menu-items"}>
                        <PageLinks groupClass="mobile-menu-list" />
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar

