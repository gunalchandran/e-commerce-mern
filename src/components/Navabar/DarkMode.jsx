import React from 'react'
import Lightmode  from '../../assets/Lightmode.png' 
import Darkmode  from '../../assets/Darkmode.png'

const DarkMode = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark");

  const element = document.documentElement;
  console.log(element);

  React.useEffect(()=>{
      if(theme=="dark"){
          element.classList.add("dark");
          localStorage.setItem("theme","dark");
      }
      else{
          element.classList.remove("dark");
          localStorage.setItem("theme","light");
      }

  },[theme]);
return (
  <div className='relative'>
    <img src={Lightmode} alt="dark" 
    onClick={()=>setTheme(theme == "light" ? "dark" : "light")}
    className={`cursor-pointer w-14 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme=="dark" ? "opacity-0" : "opacity-100"}`}/>
    <img src={Darkmode} alt="light" className='cursor-pointer w-14 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300' />
  </div>
)
}

export default DarkMode