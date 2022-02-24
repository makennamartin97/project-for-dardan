import React,{useState, useEffect} from 'react';
import { Router, Link} from '@reach/router';
import logo from '../images/logo.png';
import close from '../images/close.png';
import open from '../images/open.png';


const Navbar = (props) => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    let listener = null
    const [scrollState, setScrollState] = useState("top")
  
    useEffect(() => {
      listener = document.addEventListener("scroll", e => {
        var scrolled = document.scrollingElement.scrollTop
        if (scrolled >= 120) {
          if (scrollState !== "notTop") {
            setScrollState("notTop")
          }
        } else {
          if (scrollState !== "top") {
            setScrollState("top")
          }
        }
      })
      return () => {
        document.removeEventListener("scroll", listener)
      }
    }, [scrollState])
    
    
    return (
        <div className="parent">
        <nav className="nav sticky" style={{
          backgroundColor: scrollState === "top" ? "transparent" : "white",
          opacity: scrollState === "top" ? "100%" : "90%"
        }}>
            <div className="logo-nav">
            <div className="logo-container">
            <a href="project-for-dardan/"><img src={logo} className="navlogo" alt="logo"/></a>
            </div>

            

            <ul className={click ? "nav-options active" : "nav-options"}>
                
                <li className="option" onClick={closeMobileMenu}>
                  <a href="project-for-dardan/">Home</a>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                    <Link to="project-for-dardan/mission">The Mission</Link>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                    <Link to="project-for-dardan/nftcollection">NFT Collection</Link>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                    <Link to="project-for-dardan/submissions">Song Submissions</Link>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                    <Link to="project-for-dardan/education">Web3 Education</Link>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                    <Link to="project-for-dardan/1331team">Meet The Team</Link>
                </li>
            </ul>
            </div>
            <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <img src={close} className="icon" />
        ) : (
          <img src={open} className="icon" />
        )}
      </div>
    </nav>
    </div>
        
    )
}

export default Navbar;