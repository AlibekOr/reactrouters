import React, { useState } from 'react'

const AddTo = () => {
    const [val, setVal] = useState()
    const inputOnChange = (e) => {
        setVal(e.target.value);
    }
    const handelSumbit = (e) => {
        e.preventDefault();
        console.log(val);
        setVal('')
    }

    return (
        <div>
            <form onSubmit={handelSumbit}>
                <input value={val} onChange={inputOnChange} type="text" />
                <button>sumbit</button>
            </form>
        </div>
    )
}

export default AddTo
