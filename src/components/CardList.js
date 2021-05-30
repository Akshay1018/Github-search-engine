import React from 'react';
import Card from './Card';

import Loading from './Loading';

function CardList({ users, loading }) {

    if (loading) {
        return <Loading />
    } else {

        return (
            <section id="cardList">
                {users.map((user) => (
                    <Card key={user.id} userItem={user} loading={loading} />
                ))}
            </section>
        )


    }

}

export default CardList;