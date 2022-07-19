import React from 'react';
import SearchForm from '../Components/SearchForm';
import CocktailList from '../Components/CocktailList';
const  Home = () => {
  return (
    <main>
      <SearchForm/>
      <CocktailList/>
    </main>
  );
}

export default Home