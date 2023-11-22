import React from 'react'
import "./header.css"
const Header = () => {
    const [light, setLight] = React.useState(false)
    const body = document.body
    const handelClick = () => {
        if (light === false) {
            setLight(true)
            body.classList.remove('light')
            return body.classList.add('dark')

        }
        else {
            setLight(false)
            body.classList.remove('dark')
            return body.classList.add('light')
        }
    }

    return (
        <div className='header'>
            <button className='lightDark' onClick={handelClick}> {light === false ? 'light' : 'dark'}</button>

        </div>
    )
}

export default Header