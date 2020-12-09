import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className='page-header'>
      {/*<img  src="https://p.kindpng.com/picc/s/26-264795_fiat-decal-decorative-abarth-logo-png-transparent-png.png"*/}
      {/*     />*/}
      <svg className='page-logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 65" width="30" height="60" alt="логотип">
        <path fill="#fff" d="M42 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v21l12 15-7 15.7c14.5 13.9 35 2.8 35-13.7 0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/>
        <path fill="#4BDAE2" d="M14 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v41c0 8.2 9.2 17 20 17s20-9.2 20-20c0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/>
      </svg>
    </header>
  )
}
export default Header;

