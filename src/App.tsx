import React, { useState } from 'react'
import SearchBox from './components/SearchBox/SearchBox'
import './App.css'
import Details from './components/Details/Details'

export interface Iuser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: 'https://i.picsum.photos/id/210/536/354.jpg?hmac=qPCpI_y93j9pbBfCzroTfdmomnJbuPBHJp_r4Qxoh2s';
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: null;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company?: string;
  blog: string;
  location: string;
  email?: null;
  hireable?: null;
  bio: string;
  twitter_username?: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}


const App: React.FC = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [userData, setUserData] = useState<Iuser>({
  login: '',
  id: 0,
  node_id: '',
  avatar_url: 'https://i.picsum.photos/id/210/536/354.jpg?hmac=qPCpI_y93j9pbBfCzroTfdmomnJbuPBHJp_r4Qxoh2s',
  gravatar_id: '',
  url: '',
  html_url: '',
  followers_url: '',
  following_url: '',
  gists_url: '',
  starred_url: '',
  subscriptions_url: '',
  organizations_url: null,
  repos_url: '',
  events_url: '',
  received_events_url: '',
  type: '',
  site_admin: false,
  name: '',
  company: 'Not Available',
  blog: 'Not Available',
  location: 'Not Available',
  email: null,
  hireable: null,
  bio: '',
  twitter_username: 'Not Available',
  public_repos: 0,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: '',
  updated_at: ''
  })

  const userNameHandler = (userInput: string): void => {
    setIsLoading(true)
    fetch(`https://api.github.com/users/${userInput}`)
      .then(res => res.json())
      .then(data => {
        setUserData(data)
        setIsLoading(false)
       })

  }




  return (
    <div className='app'>
      <div className='appItems'>
        <SearchBox userNameHandler={userNameHandler} />
        {isLoading && <p style={{'color': '#fff'}}>Loading...</p>}
        <Details userData={userData} />
      </div>
    </div>
  )
}

export default App
