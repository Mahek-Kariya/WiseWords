import {useState, useEffect} from 'react';

const useRandomAdvice = () => {
    const [advice, setAdvice] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAdvice = async () => {
            try {
                const response = await fetch('	https://api.adviceslip.com/advice');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAdvice(data.slip.advice);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchAdvice();
    }, []);

    return {advice, loading, error};
};

export default useRandomAdvice;