import { Link } from 'gatsby';
import React from 'react';

const MobNavLinks = props => {
    const [active, setActive] = React.useState(false);
    function changeState() {
        if (!active) setActive(true);
        else setActive(false);
    }
    return (
        <ul className={props.activateStatus}>
            <li onClick={props.action}>
                <p>
                    <Link to='/' activeClassName='mobactive-link'>
                        Home
                    </Link>
                </p>
            </li>
            <li>
                <p>
                    <Link
                        to='/aboutus'
                        activeClassName='mobactive-link'
                        partiallyActive={true}
                        onClick={props.action}>
                        About Us
                    </Link>
                </p>
            </li>
            <li>
                <p>
                    <Link
                        to='/events'
                        activeClassName='mobactive-link'
                        partiallyActive={true}
                        onClick={props.action}>
                        Events
                    </Link>
                </p>
            </li>
            <li>
                <p>
                    <Link
                        to='/ourteam'
                        activeClassName='mobactive-link'
                        partiallyActive={true}>
                        Our Team
                    </Link>
                </p>
            </li>
            <div>
                <button
                    className={
                        active ? 'accordion activate-accordion' : 'accordion'
                    }
                    onClick={changeState}>
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

export default MobNavLinks;
