import React from 'react'
import avatar from '../../../assets/images/avatar/Michelle.png'
// import interfaceProject from '../../../model/Projects'
// import API from "../../../service/serviceApi"

// class ProjectList extends Component<Props,State> { }

class ProjetsList extends React.Component {
    render() {
        return (
            <div className="projects-list__items">
                <div className="projects-list__item">Wordpress theme
                    <div className="projects-list__info">Themeforest</div>
                </div>
                <div className="projects-list__item">$1300</div>
                <div className="projects-list__item">2th May 2016
                    <div className="projects-list__info">Completed</div>
                </div>
                <div className="projects-list__item">30 hours</div>
                <div className="projects-list__item">100%
                    <progress max="100" value="100"></progress>
                </div>
                <div className="projects-list__item">Completed</div>
                <div className="projects-list__item">
                    <img src={ avatar } alt='avatar' className="projectts-list__avatar" />
                    <div className="projectts-list__box">Michelle Stewart
                        <div className="projectts-list__info">Account</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjetsList