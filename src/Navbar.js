import React from 'react'
import './Navbar.css'

function Navbar() {

          // const [show, fadeIn] = useState(false)

          // useEffect(()=>{
          //           window.addEventListener('scroll',()=>{
          //                     if(window.screenY > 100){
          //                               fadeIn(true)
          //                     }
          //                     else{
          //                               fadeIn(false)
          //                     }
          //           })
          //           return()=>{
          //                     window.removeEventListener('scroll')
          //           }
          // },[])
          
          return (
                    <div className={'navbar'}>
                              <img className='navbar__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png' alt='netflix'/>
                              <img className='navbar__avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='avatar'/>
                    </div>
          )
}

export default Navbar
