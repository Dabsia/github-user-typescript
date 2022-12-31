import './Details.css'
import { Iuser } from '../../App'


const Details: React.FC<{userData: Iuser}> = ({ userData }): JSX.Element => {

  const createdDate = new Date(userData.created_at)

  const newDate = createdDate.toDateString()

  if (userData.twitter_username === null) {
    userData.twitter_username = 'Not Available'
  }

  if (userData.blog === null) {
    userData.blog = 'Not Available'
  }

  if (userData.location === null) {
    userData.location = 'Not Available'
  }
  if (userData.company === null) {
    userData.company = 'Not Available'
  }

  
  return (
      <div className='DetailsBox'>
          <div className='left'>
              <img className='image' src = {userData.avatar_url} alt = 'avatar' />
          </div>
          <div className='right'>
              <div className='userNameDetails'>
                <div>
                    <p>{userData.login}</p>
                    <p>{userData.name}</p>
                    <p>{userData.bio}</p>
                </div>
                <p>Joined: {newDate}</p>
              </div>
              <div className='activities'>
                  <div className='actions' >
                      <p>Repos</p>
                      <p>{userData.public_repos}</p>
                  </div>
                  <div className='actions' >
                      <p>Followers</p>
                      <p>{userData.followers}</p>
                  </div>
                  <div className='actions' >
                      <p>Following</p>
                      <p>{userData.following}</p>
                  </div>
              </div>
              <div className='socialsContainer'>
                  
                <div className='socials'>
                    <i className="ri-map-pin-2-line newIcon"></i>
                    <span>{userData.location}</span>
                  </div>
                  
                  <div className='socials'>
                    <i className="ri-twitter-fill newIcon"></i>
                    <span>{userData.twitter_username}</span>
                </div>
              </div>
              <div className='socialsContainer'>
                  
                <div className='socials'>
                    <i className="ri-links-line newIcon"></i>
                    <span>{userData.blog}</span>
                  </div>
                  
                  <div className='socials'>
                    <i className="ri-building-fill newIcon"></i>
                    <span>{userData.company}</span>
                </div>
              </div>
          </div>
    </div>
  )
}

export default Details