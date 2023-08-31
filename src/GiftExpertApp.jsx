
// hIxj3Qg6yOqtPrOe1iBw6tf78ej34hTe


import { useState } from "react";

import { AddCategory, GifGrid }  from "./components/";

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    
    const onAddCategory = (newCategory) => {
        if( categories.includes(newCategory)) return;
        setCategories([...categories, newCategory]);
    };
    console.log(categories);
  return (
    <>
        <h1>Gift Expert App</h1> 
                    <AddCategory 
                        //setCategories={setCategories} 
                        onNewCategory={ (value)=> onAddCategory(value) }
                    />
        
            {
                categories.map( category => {
                    return (
                        <GifGrid 
                            key={category}
                            category= {category} 
                        />
                            
                    )}
                )
            }
    </>
  )
}

export default GiftExpertApp;