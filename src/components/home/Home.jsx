import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CountriesSelect from './CountriesSelect';
import "./home.css"
const Home = () => {
    const [inputVal, setInputVal] = React.useState('')
    const handelChange = (e) => {
        setInputVal(e.target.value)
    }

    const { counters } = useSelector((state) => state.countries)
    return (
        <div className='containers'>
            <div className='categoriy'>
                <input type="search" value={inputVal} onChange={handelChange} />
                <CountriesSelect />
            </div>
            <div className='homeCounters' >
                {counters.filter((i) => {
                    return inputVal.toLocaleLowerCase() === '' ? i : i.name.common.toLocaleLowerCase().includes(inputVal)
                })
                    .map((item, key) => (
                        <NavLink to={`${item.cca3}`} className='countersInner' key={key}>
                            <div > <img className='imges' src={item.flags.png} alt="" /></div>
                            <div className='countersItem'>
                                <div>{item.name.common} </div>
                                <div> Population: {item.population}</div>
                                <div> Region: {item.region}</div>
                                <div> Capital: {item.capital}</div>

                            </div>
                        </NavLink>

                    ))}
            </div>
        </div>
    )
}

export default Home