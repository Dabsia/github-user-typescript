import React, { useState } from 'react'
import SearchBox from './components/SearchBox/SearchBox'
import './App.css'
import Details from './components/Details/Details'

export interface Iuser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company?: null;
  blog: string;
  location: string;
  email?: null;
  hireable?: null;
  bio: string;
  twitter_username?: null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}


const App: React.FC = () => {

  const [userData, setUserData] = useState<Iuser>()

  const userNameHandler = (userInput: string): void => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then(res => res.json())
      .then(data => setUserData(data))

  }




  return (
    <div className='app'>
      <div className='appItems'>
        <SearchBox userNameHandler={userNameHandler} />
        <Details userData={userData} />
      </div>
    </div>
  )
}

export default App
