import React from 'react'
import { useGlobalContext } from '../Context';

const SearchForm = () => {
    const { SetSearchTerm } = useGlobalContext();
    const searchValue = React.useRef('');
    // setting up my focus function on the input
    // with react.useEffect, we don't always need to import.
    React.useEffect(() => {
        // setting up my focus function.
        searchValue.current.focus();
    }, []);
    // setting up my handlesubmit function
    const HandleSubmit = (e) => {
        e.preventDefault();
    }
    const searchCocktail = (e) => {
        e.preventDefault();
        SetSearchTerm(searchValue.current.value);
    }
  return (
    <section className='section search'>
      <form className="search-form" onSubmit={HandleSubmit}>
        <div className="form-control">
            <label htmlFor="name">search your favorite cocktail</label>
        </div>
        <input 
        type="text" 
        id="name"
        ref={searchValue}
        onChange={searchCocktail}/>
      </form>
    </section>
  );
}

export default SearchForm;