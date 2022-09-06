import { useState, useEffect } from 'react'
import axios from 'axios';
import ErrorResponse from 'models/ErrorResponse';

export const useConfig = (key: string, defaultVal: string) => {

    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState<string>(defaultVal);
    const [error, setError] = useState<ErrorResponse>()

    useEffect(() => {
        axios.get(`/api/config/${key}`)
            .then(({ data }) => setValue(data.toString()))
            .catch(e => setError(e.response.data))
            .finally(() => setLoading(false));
    }, [key, defaultVal]);

    return { value, error, loading };
}
