import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style.css';
import axios from 'axios';

import Header from './components/Header'
import CardList from './components/CardList';
import Search from './components/Search';
import Footer from './components/Footer'

import ContactUs from './components/ContactUs';
import User from './components/User';

function App() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [chkbtn, setchkbtn] = useState(false);
   
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);

    const searchUsers = async (text) => {
        setLoading(true);
        setchkbtn(false);

        const res = await axios.get(`https://api.github.com/search/users?q=${text}`);

        setUsers(res.data.items);
        setLoading(false);
        setchkbtn(true);

    }
    const clearUsers = () => {

        setUsers([]);
        setLoading(false);
        setchkbtn(false);


    }
   
    const getUser = async (username) => {

        setLoading(true);

        const res = await axios.get(`https://api.github.com/users/${username}`);

        setUser(res.data);
        setLoading(false);


    }
    const getUserRepos = async (username) => {
        setLoading(true);

        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=6&sort=created:asc`);
        setRepos(res.data);
        setLoading(false);

    }
    useEffect(() => {
        async function cdm() {

            setLoading(true);
            setchkbtn(false)

            const res = await axios.get('https://api.github.com/users');

            setUsers(res.data);
            setLoading(false);
            setchkbtn(true);
        }
        cdm();
    },[])
    return (
        <Router  basename={process.env.PUBLIC_URL}>
            <div className='container'>

                <header>
                    <Header />
                </header>

                <Switch>
                    <Route exact path="/contact" component={ContactUs} />

                    <Route
                        exact
                        path="/"
                        render={() => (
                            <>
                                <section id="search">
                                    <Search searchUsers={searchUsers}
                                        clearUsers={clearUsers}
                                        chkbtn={chkbtn}

                                        loading={loading} />
                                </section>

                                <CardList users={users} loading={loading} />

                            </>
                        )}
                    />
                    <Route
                        exact
                        path='/user/:login'
                        render={(props) => (

                            <User
                                {...props}
                                getUser={getUser}
                                getUserRepos={getUserRepos}
                                user={user}
                                repos={repos}
                                loading={loading}
                            />

                        )}
                    />
                </Switch>
                <Footer />
            </div>
        </Router>


    )



}





export default App;