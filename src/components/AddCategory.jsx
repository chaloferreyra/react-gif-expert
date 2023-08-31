import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
    
    const [inputValue, setInputValue] = useState('');    
    
    const onInputChange = ({target}) => {
                                setInputValue(target.value);
                            }

    const onSubmitValue = (event) => {
                                event.preventDefault();

                                if(inputValue.trim().length <= 1) return;

                                onNewCategory(inputValue.trim());
                                setInputValue('');
                            }

  return (
    <form onSubmit={onSubmitValue}>
        <input
            type="text"
            placeholder='Buscar gifs'
            value={inputValue}
            //onChange={e => setInputValue(e.target.value)}
            onChange={onInputChange}
        />
    </form>
  )
}