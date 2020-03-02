import React from 'react'

class ProjetsInfo extends React.Component {
	rendr() {
		return (
			<div className={'row-projects-options'}>
				<div className="row-projects-options__item">
					<div className="row-projects-options__inner">
						<a href="projects.html" className="row-projects-options__link active">All Projects (358)</a>
					</div>
					<div className="row-projects-options__inner">
						<a href="workflow.html" className="row-projects-options__link">Workflow</a>
					</div>
				</div>
				<div className="row-projects-options__item">
					<div className="row-mess-options__filter filter">
						Filter messages:
						<select className="filter__items">
							  <option className="filter__item">All</option>
							  <option className="filter__item">Date</option>
							  <option className="filter__item">Week</option>
						</select>		
					</div>
				</div>
			</div>
		)
	}
}

export default ProjetsInfo