import { useEffect, useState } from 'react';

const useCondition = () => {
    const [condition, setCondition] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:5000/shopByCondition")
            .then(res => res.json())
            .then(data => {
                setCondition(data);
                setLoading(false);
            })
    }, []);
    return [condition, loading];
};

export default useCondition;