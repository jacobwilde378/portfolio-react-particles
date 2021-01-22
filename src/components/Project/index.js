import React from 'react'

function Project({ project }) {
    // const project = thisProject
    const { name, image, alt, repo, link, description } = project;
    return (
        <div className="">
            <div className="card-header" key={name}>
                <h3>{name}</h3>
            </div>
            <div>
                <img
                    src={require(`../../assets/projects/${image}`).default}
                    alt={alt}
                    className="card-image"
                />
            </div>
            <div className="card-body">
                <p>{description}</p>
                <div>
                    <a href={repo} target="_blank" rel="noreferrer">Github Repo</a>
                </div>
                <div>
                    <a href={link} target="_blank" rel="noreferrer">Deployed Site</a>
                </div>
            </div>
        </div>
    )
}

export default Project