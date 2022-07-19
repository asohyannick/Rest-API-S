import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();
// import styles
const AppProvider = ({ children }) => {
    // setting up our state values
    const [ loading, SetLoading ] = useState(true);
    // searchterm for our searching cocktails individually...
    const [ searchTerm, SetSearchTerm ] = useState('love');
    const [ cocktails, SetCocktail ] = useState([]);
    // Now let's set up our fetch api
    const fetchCocktails = useCallback( async() => {
        SetLoading(true);
        try {
            const req = await fetch(`${url} ${searchTerm}`);
            const data = await req.json();
            console.log(data);
            // let's iterate over our arr.
            const { drinks } = data;
            if(drinks) {
                const newCocktails = drinks.map((item) => {
                const { 
                    idDrink, 
                    strDrink, 
                    strDrinkThumb, 
                    strAlcoholic, 
                    strGlass 
                } = item;
                return { 
                    id:idDrink, 
                    name:strDrink, 
                    image:strDrinkThumb, 
                    info: strAlcoholic, 
                    glass:strGlass 
                }
                })
                SetCocktail(newCocktails);
            } else {
                SetCocktail([]);
            }
        } catch(error) {
            console.log(error);
            SetLoading(false);
        }
    }, [searchTerm]);
    useEffect(() => {
        fetchCocktails();
    }, [searchTerm, fetchCocktails]);
  return (
    <AppContext.Provider 
    value={{
        loading,
        cocktails,
        SetSearchTerm,
    }}>
        {children}
    </AppContext.Provider>
  )
}
// this is our global hook
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };