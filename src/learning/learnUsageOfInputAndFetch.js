import React, {useState, useEffect} from "react";
import Axios from "axios";
import { func } from "prop-types";

/* Custom Hook */
function useInput(defaultValue) {
    const [value, setValue] = useState(defaultValue)

    onChange = (e) => {
        const { target : value } = e
        setValue(value)
    }

    return {value, onChange}
}

/* Custom Hook */
function useFetch(url) {
    const [payload, setPayload] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    fetchApi = async () =>  {
        try {
            const data = await Axios.get(url);
            setPayload(data)
        } catch {
            setError('😥');
        } finally {
            setLoading = false;
        }
    }

    return {payload, loading, error};
}

function App() {
    const fetchingCatUrl = "https://placekitten.com/g/200/300"
    const {value, onChange} = useInput("");
    const {payload, loading, error} = useFetch(fetchingCatUrl)

    return (
        <div className="App">
            <h1>Custom Hooks</h1>
            <br/>
            <input value={value} onChange={onChange} placeholder="What's your name"></input>
            <br/>
            {loading && <span>Loading your cat</span>}
            {!loading && error && <span>{error}</span>}
            {!loading && payload && <img src={payload.file}}
        </div>
    )
}