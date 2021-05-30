import React, { useEffect } from 'react'
import Loading from './Loading';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from './Repos';
import '../profile.css'

function User({loading,user,getUser,getUserRepos,repos,match}){
    useEffect(()=>{
        function cdm(){
            getUser(match.params.login);
            getUserRepos(match.params.login);
            // eslint-disable-next-line
        }
        cdm();
         // eslint-disable-next-line
    },[])
   
   
    const {
        name,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        company
    } = user;

   
    if (loading) {
        return <Loading />
    }
    return (
        <>
            <div className="w3-content w3-margin-top" style={{ maxWidth: '1400px' }}>
            <Link to='/'> <button className='backSearch' >Go Back</button></Link>
                <div className="w3-row-padding">
                    <div className="w3-third">
                        <div className="w3-white w3-text-grey w3-card-4">
                            <div className="w3-display-container">
                                <img src={avatar_url} style={{ width: '100%', height: '50%' }} alt="Avatar" />
                                <div className="w3-display-bottomleft w3-container w3-text-black">

                                </div>
                            </div>
                            <div className="w3-container">
                                <h2>{name}</h2>
                                {bio && (<p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>{bio}</p>)}
                                <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>{location}</p>
                                <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>{login}</p>
                                {html_url && (<p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>{html_url}</p>)}
                                {blog && (<p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>{blog}</p>)}
                                {company && (<p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>{company}</p>)}
                                <hr />

                                <p className="w3-large"><b><i
                                    className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Followers :: {followers}</b></p>

                                <p className="w3-large"><b><i
                                    className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Following :: {following}</b></p>


                                <br />


                            </div>


                        </div>
                        <a href={`https://github.com/${login}`} target='_blank' rel="noreferrer">
                        <button className="btn btn-light git-profile-btn">
                           View Git Profile</button>
                    </a>
                        <br />
                    </div>
                    <div className="w3-twothird">
                   
                        <div className="w3-container w3-card w3-white w3-margin-bottom">
                            <h2 className="w3-text-grey w3-padding-16"><i
                                className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Repositories :: {public_repos}

                            </h2>
                            <Repos repos={repos} />

                        </div>

                    </div>
                </div>


            </div>
        </>
    )

}
User.propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired
}



export default User
