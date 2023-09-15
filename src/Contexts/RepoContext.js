import React, { useState, useEffect } from "react";
import { doGet } from "../Lib/Api";

export const RepoContext = React.createContext(null)

export default function RepoContextProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        load()
    }, [])

    const load = () => {
        setLoading(true)
        const url = process.env.REACT_APP_LISTING_API_URL
        return doGet(url).then((data) => {
            setLoading(false)
            setRepos(data)
        }).catch((error) => {
            setLoading(false)
        })
    }

    const get = (id) => {
        return repos.find((e) => e.id == id);
    }

    return <RepoContext.Provider value={{
        loading,
        repos,
        load,
        get
    }} >
        {children}
    </RepoContext.Provider>
}