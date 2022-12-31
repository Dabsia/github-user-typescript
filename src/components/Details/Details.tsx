import {useState} from 'react'
import './Details.css'
import Image from '../../Assets/Dabo Johnson.jpg'
import { Iuser } from '../../App'


const Details: React.FC<{userData: Iuser}> = ({ userData }): JSX.Element => {

    // const [Username, setUsername] = useState<string>('Username')
    
    console.log(userData.bio)

    // if (userData.bio === 0) {
        
    // }
    
  return (
      <div className='DetailsBox'>
          <div className='left'>
              <img className='image' src = {Image} alt = 'avatar' />
          </div>
          <div className='right'>
              <div className='userNameDetails'>
                <div>
                    <p>Username</p>
                    <p>FullName</p>
                    <p>This user has no bio</p>
                </div>
                <p>Joined: 2019-12-26</p>
              </div>
              <div className='activities'>
                  <div className='actions' >
                      <p>Repos</p>
                      <p>88</p>
                  </div>
                  <div className='actions' >
                      <p>Followers</p>
                      <p>7</p>
                  </div>
                  <div className='actions' >
                      <p>Following</p>
                      <p>9</p>
                  </div>
              </div>
              <div className='socialsContainer'>
                  
                <div className='socials'>
                    <i className="ri-map-pin-2-line newIcon"></i>
                    <span>Not Available</span>
                  </div>
                  
                  <div className='socials'>
                    <i className="ri-twitter-fill newIcon"></i>
                    <span>Not Available</span>
                </div>
              </div>
              <div className='socialsContainer'>
                  
                <div className='socials'>
                    <i className="ri-links-line newIcon"></i>
                    <span>Not Available</span>
                  </div>
                  
                  <div className='socials'>
                    <i className="ri-building-fill newIcon"></i>
                    <span>Not Available</span>
                </div>
              </div>
          </div>
    </div>
  )
}

export default Details