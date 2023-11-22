import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getData } from '../store/countriesSlice';

const CountriesSelect = () => {
    const dispatch = useDispatch()
    const [select, setSelect] = React.useState('all')
    useEffect(() => {
        dispatch(getData(select))
    }, [select])
    const handelSelect = (e) => {
        setSelect(e.target.value);
    }
    return (
        <div>
            <select defaultValue={'all'} onChange={e => handelSelect(e)}>
                <option value="all">all</option>
                <option value="america">America</option>
                <option value="africa">Africa</option>
                <option value="Antarctic">Antarctic</option>
                <option value="europe">Europe</option>
                <option value="asia">Asia</option>
                <option value="ocean">Ocean</option>
            </select>
        </div>
    )
}

export default CountriesSelect