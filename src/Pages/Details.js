import React, { useEffect, useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { RepoContext } from '../Contexts/RepoContext';
import { doGet } from '../Lib/Api';
import styles from "../Styles/Style.module.css"

export default function Details() {
    const params = useParams()
    const { get, repos } = useContext(RepoContext);
    const [repo, setRepo] = useState(null)
    const [languages, setLanguages] = useState(null)

    useEffect(() => {
        if (repos.length) {
            setRepo(get(params.id))
        }
    }, [repos])

    useEffect(() => {
        if (repo) {
            getLanguages();
        }
    }, [repo])

    const getLanguages = () => {
        doGet(repo.languages_url).then((response) => {
            setLanguages(response)
        }).catch((error) => {
            console.log('Details->getLanguages->error', error);
        })
    }

    const getLanguagesAsText = () => {
        const languageKeys = languages ? Object.keys(languages) : []
        return languageKeys ? languageKeys.join(", ") : "";
    }

    const renderLanguages = () => {
        const languageKeys = languages ? Object.keys(languages) : []
        return languageKeys ? languageKeys.join(", ") : null;
    }

    return <div data-testid="details-page" className={[styles.container]}>
        <div style={{ marginTop: 25 }} >
            <Link aria-label="Back" to="/" >Back</Link>
        </div>
        {
            repo ? <div>
                <div>
                    <h1 tabIndex={1} id="main-heading" >Repository - {repo.full_name} </h1>

                    <h2 tabIndex={1} aria-labelledby='description' >Description</h2>
                    <p id="description" >{repo.description}</p>

                    <h2 tabIndex={1} aria-labelledby='languages' >Languages</h2>
                    <div id="languages" aria-label={`Languages: ${getLanguagesAsText()}`} > {renderLanguages()}</div>

                    <p tabIndex={1} aria-label={`Forks - count ${repo.forks}`} >Forks: <strong>{repo.forks}</strong></p>
                    <p tabIndex={1} aria-label={`Open Issues - count ${repo.open_issues}`} >Open Issues: <strong>{repo.open_issues}</strong></p>
                    <p tabIndex={1} aria-label={`Watchers - count ${repo.watchers}`} >Watchers: <strong>{repo.watchers}</strong></p>
                    <p>
                        <a href={repo.html_url} target='_blank' rel="noreferrer" tabIndex={1} >Goto Github Repository</a>
                    </p>
                </div>
            </div> : <p>Loading...</p>
        }
    </div >
}