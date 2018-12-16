import React from 'react'

export default function ProjectDetails(props) {
   let params = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <div className="card-title">Project Title - {params}</div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus quos, nesciunt consectetur alias, earum delectus neque corporis numquam, voluptate non veniam est vel cupiditate odit ut quod illum magni architecto?</p>
                </div>

                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by: Prince Donkor</div>
                    <div>2nd September, 2am</div>
                </div>

            </div>
        </div>
    )
}
