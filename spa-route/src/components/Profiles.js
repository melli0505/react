import React from 'react';
import {Link, Route, NavLink, withRouter} from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from '../WithRouterSample';

const Profiles = () => {
    const activeStyle = {
        background: 'violet',
        color: 'black'
    };

    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    {/* <Link to="/profiles/melly">Melly</Link> */}
                    <NavLink activeStyle={activeStyle} to="/profiles/melly">Melly</NavLink>
                </li>
                <li>
                    {/* <Link to="/profiles/academic">Academic</Link> */}
                    <NavLink activeStyle={activeStyle} to="/profiles/academic">Academic</NavLink>
                </li>
            </ul>
            <Route  // component 대신 render을 이용해 컴포넌트 자체가 아닌 보여주고 싶은 JSX 전달
                path="/profiles"
                exact // props 전달시 값 생략하면 자동으로 true
                render={()=><div>사용자를 선택해주세요</div>}
                />
            <Route path="/profiles/:username" component={Profile} />
            {/* <WithRouterSample /> */}
        </div>
    );
};

export default Profiles;