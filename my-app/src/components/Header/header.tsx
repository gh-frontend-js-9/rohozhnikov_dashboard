import React from 'react'
import imgLogo from '../../assets/images/logo/logo.png'
import imgAvatar from '../../assets/images/avatar/ava.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const Header: React.FC = () => {
    return (
        <header className="header container">
            <div className="header__logo">
                <a href="/"><img src={imgLogo} alt="logo"/></a>
            </div>
            <div className="user header__user">
                <div className="user__add">
                    <div className="user__add__content">
                        <span className="user__add--color">Add&nbsp;&nbsp;&nbsp; </span> +
                    </div>
                </div>
                <div className="user__search">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <div className="user__bell">
                    <FontAwesomeIcon icon={ faBell } />
                </div>
                <div className="user__avatar">
                    <img src={imgAvatar} alt="avatar" />
                </div>
                <div className="user__chevron">
                    <FontAwesomeIcon icon={ faCheck }/>
                </div>
            </div>
	    </header>
    )
}