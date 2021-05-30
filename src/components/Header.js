import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return (
        <>
            <nav>
                {/* <h1><Link to='/'><i className="fab fa-github"></i> GitHub Search Engine</Link></h1> */}
               <h1> <a href="/Github_DB"><i className="fab fa-github"></i> GitHub Search Engine</a></h1>
            </nav>
            <div>
                {/* <Link to = "/"><i className='fa fa-home'></i> Home</Link> */}
                <a href="/Github_DB"><i className="fa fa-home"></i> Home</a>
                <Link to = "/contact"><i className='fas fa-envelope'></i> Contact Us</Link>

            </div>
        </>


    )
}

export default Header;