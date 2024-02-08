import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

const Posts = () => {
    const {theme, handleOnClick} = useContext(ThemeContext);

  return (
    <>
    <h4>Posts with theme {theme}</h4>
    <button className={`btn ${theme === 'dark' ? "btn-light" : "btn-dark"}`} onClick={handleOnClick}>
      {theme === "dark" ? "Light" : "Dark"}
    </button>
    </>
  )
}

export default Posts;