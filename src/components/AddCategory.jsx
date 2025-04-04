import { useState } from "react"

export const AddCategory = ({onNewCategory}) =>{

    const [inputValue, setInputValue] = useState("");
    const onInputChange = ({target}) =>{
        console.log(target.value);
        
        setInputValue(target.value);
    };
    const onSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // setCategory(categories => [inputValue, ...categories] );
        setInputValue('');
        onNewCategory(inputValue.trim());
        
    }

    return(
        <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="search gifs"
                    value={inputValue}
                    onChange={(event)=> onInputChange(event)}
                />
        </form>
    )
}