import React from 'react'
import { NavLink } from 'react-router-dom'
const Btns = () => {
    const [rout, setRout] = React.useState({
        one: '',
        two: '',
        three: ''
    })
    const handelBtn1 = () => {
        setRout({
            one: 'active',
            two: '',
            three: ''
        })
    }
    const handelBtn2 = () => {
        setRout({
            one: '',
            two: 'active',
            three: ''
        })
    }
    const handelBtn3 = () => {
        setRout({
            one: '',
            two: '',
            three: 'active'
        })
    }
    return (
        <div className='con'>
            <NavLink to={'/home'} onClick={handelBtn1} className={`btn ${rout.one !== '' ? 'active' : ''}`} >home</NavLink>
            <NavLink to={'/about'} onClick={handelBtn2} className={`btn ${rout.two !== '' ? 'active' : ''}`} >about</NavLink>
            <NavLink to={'/profil'} onClick={handelBtn3} className={`btn ${rout.three !== '' ? 'active' : ''}`} >contact </NavLink>
        </div>
    )
}

export default Btns
