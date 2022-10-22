import React from 'react'

const Form = ({ input, setInput }) => {
    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="form-container">
            <form onSubmit={handleFormSubmit}>
                <input
                    className="input-form"
                    type="text"
                    min="3"
                    max="60"
                    placeholder="Enter a task..."
                    value={input}
                    onChange={handleInputChange}
                />
                <button className="button-submit" type="submit">
                Add task!
                </button>
            </form>
        </div>
    );
}

export default Form;
