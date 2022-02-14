import React,{useState} from 'react';
import logo from '../images/logo.png';
import close from '../images/close.png';
import open from '../images/open.png';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    
    return (
        <div className="parent">
        <nav className="nav sticky">
            <div className="logo-nav">
            <div className="logo-container">
            <a href="/"><img src={logo} className="navlogo" alt="logo"/></a>
            </div>

            

            <ul className={click ? "nav-options active" : "nav-options"}>
                
                <li className="option" onClick={closeMobileMenu}>
                    <a href="/">Home</a>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                    <a href="/#mission" >The Mission</a>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                    <a href="/#collection" >NFT Collection</a>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                    <a href="/#submissions">Song Submissions</a>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                    <a href="/#education">Web3 Education</a>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                    <a href="/#team" >Meet The Team</a>
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