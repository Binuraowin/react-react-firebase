import React from 'react'
import Notification from "../dashboard/Notifications";
import ProjectSummary from "./ProjectSummary";

const ProjectList = () =>{
    return (
        <div className={"project-list section"}>
            <ProjectSummary/>
            <ProjectSummary/>
            <ProjectSummary/>
        </div>
    )
}
export default ProjectList
