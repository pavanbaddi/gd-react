import React, { useContext } from 'react'
import { RepoContext } from '../Contexts/RepoContext';
import RepoCard from '../Components/RepoCard';
import styles from "../Styles/Style.module.css"

export default function Home() {
    const { loading, repos } = useContext(RepoContext);
    return <div className={styles.container} >
        <div>
            <div>
                <h1 id="main-heading" >List of Repos</h1>
            </div>

            {
                repos.length
                    ? <ul id="repositories" >
                        {
                            repos.map((repo, index) => {
                                return <li key={repo.id} >
                                    <RepoCard repo={repo} index={index} />
                                    <hr />
                                </li>
                            })
                        }
                    </ul>
                    : <div>
                        <p>{loading ? 'Loading...' : 'No repos found'}</p>
                    </div>
            }

        </div>
    </div>
}