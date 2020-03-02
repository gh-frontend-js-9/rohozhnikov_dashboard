import React from 'react'

class ProjetsTitle extends React.Component {
    render() {
        return (
            <div className="projects-list__items">
                <div className="projects-list__item">Project title</div>
                <div className="projects-list__item">Value</div>
                <div className="projects-list__item">Deadline</div>
                <div className="projects-list__item">Time spent</div>
                <div className="projects-list__item">Progress</div>
                <div className="projects-list__item">Status</div>
                <div className="projects-list__item">Assigned to</div>
            </div>
        )
    }
}

export default ProjetsTitle