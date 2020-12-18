import React from 'react'

const ProjectDetails = (prop) => {
    const id = prop.match.params.id;
    return (
        <div className={"container section project-details"}>
            <div className={"card z-depth-0"}>
                <div className={"card-content"}>
                    <span className={"card-title"}>Project Title- {id}</span>
                    <p>Description</p>
                </div>
                <div className={"card-action grey lihghten-4 white-text"}>
                    <div>Potsed by binura</div>
                    <div>Date</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
