import React, {useState} from 'react'
import './SearchBox.css'

interface SearchProps{
    userNameHandler(userInput: string):  void
}



const SearchBox: React.FC<SearchProps> = ({userNameHandler}) => {

    const [userInput, setUserInput] = useState<string>('')

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        userNameHandler(userInput)
    }


  return (
    <div className='searchBoxContainer'>
          <h1 className='searchBoxContent--Header'>DevFinder</h1>
          <form onSubmit={submitHandler} className='searchBox'>
              <i className="ri-search-line SearchIcon icon"></i>
              <input onChange={e => setUserInput(e.currentTarget.value)} value = {userInput} type = 'text' className='searchBoxInput' placeholder='Search Github Username_' />
              <button className='searchBtn'>Search</button>
          </form>
    </div>
  )
}

export default SearchBox
