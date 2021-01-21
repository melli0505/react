import React from 'react';
import {Link, Route} from 'react-router-dom';
import WithRouterSample from '../WithRouterSample';

const data = {
    melly: {
        name: '강다인',
        description: 'HUFS CES 19'
    },
    academic: {
        name: 'TAB',
        description: 'HUFS Academic society'
    }
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];
    if(!profile){
        return <div>존재하지 않는 정보입니다.</div>
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        <WithRouterSample />

        </div>
    );
};

export default Profile;