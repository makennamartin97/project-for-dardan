import React from 'react';
import ig from '../images/instagram.svg';
import twitter from '../images/twitter.svg';
import discord from '../images/discord.svg';

//footer with social media icons
const Footer = () => {
  return (
    <div className='footer'>
        <div id="icons">
            <a href="https://discord.com/invite/G7nXe55dSE"><img src={discord} alt="discord"/></a>
            <a href="https://twitter.com/1331Recordz"><img src={twitter} alt="twitter"/></a>
            <a href="https://instagram.com/1331Recordz"><img src={ig} alt="ig"/></a>
        </div>
        <div id="copyright">
            <p>© 2022 1331 Recordz LLC. | All rights reserved.</p>
        </div>
    </div>
  );
};
export default Footer;