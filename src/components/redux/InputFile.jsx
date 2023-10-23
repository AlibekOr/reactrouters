const InputFile = ({ text, handleInput, handelSubmit }) => {
    return (
        <div>
            <label>
                <input value={text} onChange={(e) => handleInput(e.target.value)} />
                <button onClick={handelSubmit}> Add Todo</button>
            </label>
        </div>
    )
}

export default InputFile
