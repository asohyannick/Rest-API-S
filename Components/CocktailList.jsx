import React from 'react'
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../Context';
const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  if(loading) {
    return <Loading/>
  }
  if(cocktails.length < 1 ) {
    return (
      <article>
         <header>
          <h2 className='section-title'>No cocktails matched your search criteria.</h2>
         </header>
      </article>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>
        cocktails
      </h2>
      <div className="cocktail-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item}/>
        })}
      </div>
    </section>
  )
}

export default CocktailList;