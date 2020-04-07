import { Link } from 'gatsby';
import React from 'react';

const NavLinks = () => {
    const [active, setActive] = React.useState(false);
    function activateDropdown() {
        if (!active) setActive(true);
    }
    function deactivateDropdown() {
        if (active) setActive(false);
    }
    return (
        <ul className='nav-links'>
            <li>
                <Link to='/' activeClassName='active-link'>
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to='/aboutus'
                    activeClassName='active-link'
                    partiallyActive={true}>
                    AboutUs
                </Link>
            </li>
            <li>
                <Link
                    to='/events'
                    activeClassName='active-link'
                    partiallyActive={true}>
                    Events
                </Link>
            </li>
            <li>
                <Link
                    to='/ourteam'
                    activeClassName='active-link'
                    partiallyActive={true}>
                    OurTeam
                </Link>
            </li>
            <div onMouseLeave={deactivateDropdown}>
                <button className='accordion' onMouseEnter={activateDropdown}>
                    Units
                </button>
                <NestedList
                    activateStatus={
                        active ? 'nestedList activate-nestedList' : 'nestedList'
                    }
                />
            </div>
        </ul>
    );
};

const NestedList = props => (
    <ul className={props.activateStatus}>
        <li>
            <p>
                <Link
                    to='/pratheeksha'
                    activeClassName='mobactive-link'
                    partiallyActive={true}
                    onClick={props.action}>
                    Pratheeksha
                </Link>
            </p>
        </li>
        <li>
            <p>
                <Link
                    to='/santhwanam'
                    activeClassName='mobactive-link'
                    partiallyActive={true}
                    onClick={props.action}>
                    Santhwanam
                </Link>
            </p>
        </li>
        <li>
            <p>
                <Link
                    to='/unarv'
                    activeClassName='mobactive-link'
                    partiallyActive={true}>
                    Unarv
                </Link>
            </p>
        </li>
    </ul>
);

export default NavLinks;
