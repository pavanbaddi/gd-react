import React from 'react'
import { Link } from 'react-router-dom'

export default function RepoCard({ repo, index }) {
    return (
        <div>
            <h2 tabIndex={index} >Repo Name: {repo.full_name}</h2>
            <h3 tabIndex={index} aria-labelledby={`description-${repo.id}`} >Description:</h3>
            <p id={`description-${repo.id}`} >{repo.description}</p>

            <div>
                <Link aria-label={`View Details for repository: ${repo.full_name}`} tabIndex={index} to={`/details/${repo.id}`}>View Details</Link>
            </div>
        </div >
    )
}
