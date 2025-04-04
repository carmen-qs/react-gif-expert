import { useState } from "react"
import { GifGrid, AddCategory } from "./components";




export const GifExpertApp = () =>{ // esto es un componente


    const [categories, setCategories] =useState(["One Punch"]);// aqui se esta usando un hook de estados "useState"
    console.log(categories);

    const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory)) return;
        console.log(newCategory);
        
        setCategories([...categories , newCategory]);
    }
    
    return(
        <>
            {/* title */}
            <h1>jkjfjfdjgjf</h1>    
            {/* input */}
            <AddCategory  
            onNewCategory ={onAddCategory }
            />
            {/* Gif List */} 

            <ol>
                {categories.map((category) =>(
                    < GifGrid  
                    key={category} 
                    category={category

                    }/>
                ))}
                
            </ol>
                {/* Gif Item */}
        </>
    )
}