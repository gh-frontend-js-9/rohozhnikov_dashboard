import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'

export const Navbar: React.FC = () => {
    return (
        <nav className="nav container">
            <div className="sidebar">
                <ul className="sidebar__items">
                    <li className="sidebar__item">
                        <a href="/" className="sidebar__link">
                            <FontAwesomeIcon icon={ faHome } color ="#757da4" />
                        </a>
                    </li>
                    <li className="sidebar__item">
                        <a href="projects.html" className="sidebar__link">
                            <FontAwesomeIcon icon={ faBars } color ="#757da4" />
                        </a>
                    </li>
                    <li className="sidebar__item">
                        <a href="graph.html" className="sidebar__link">
                            <FontAwesomeIcon icon={ faChartLine } color ="#757da4" />
                        </a>
                    </li>
                    <li className="sidebar__item active">
                        <a href="messages.html" className="sidebar__link">
                            <FontAwesomeIcon icon={ faEnvelope } className="active" />
                        </a>
                    </li>
                    <li className="sidebar__item">
                        <a href="#!" className="sidebar__link">
                            <FontAwesomeIcon icon={ faUserFriends } color ="#757da4" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}