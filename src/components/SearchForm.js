import React ,{useEffect,useRef} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  const searchValue = useRef('');
  const searchCocktail = ()=>{
    setSearchTerm(searchValue.current.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    

  }

  useEffect(()=>{
    searchValue.current.focus()
  },[])
  return (
    <section className="section search">
      <div className="search-form">
        <div className="form-control">
        <label htmlFor="name"> Search your favorite cocktail</label>
        <input type="text" id='name' ref={searchValue} onChange={searchCocktail} onSubmit={handleSubmit}  />

        </div>
      </div>
    </section>
  )
}

export default SearchForm
