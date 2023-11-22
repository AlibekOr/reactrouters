import React, { useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { getModal } from "../store/modal"
import { useDispatch, useSelector } from 'react-redux'
import "./modal.css"
const Modal = () => {
    const dispatch = useDispatch()
    let { id } = useParams()
    const { modal } = useSelector((state) => state.modalSilce)
    const { counters } = useSelector((state) => state.countries)
    useEffect(() => {
        dispatch(getModal(id))
    }, [id])
    return (
        <div className='modalSlice'>
            <NavLink to={'/'}>back</NavLink>
            {(modal.map((item, key) => (
                <div className='modalInner' key={key}>
                    <div> <img className='img' src={item.flags.png} alt="" /></div>
                    <div>
                        <div>{item.name.common} </div>
                        <div> Population: {item.population}</div>
                        <div> Region: {item.region}</div>
                        <div> Capital: {item.capital}</div>
                        <div> {
                            item.borders === undefined ? '' : item.borders.map((i, key) => (
                                counters.filter((c) => {
                                    return c.cca3 === i
                                }).map((nameI) =>
                                    <NavLink key={key} to={`/${i}`}>{nameI.name.common} </NavLink>
                                )
                            ))
                        } </div>
                    </div>
                </div>
            )))}
        </div>
    )
}

export default Modal