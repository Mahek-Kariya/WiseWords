import React, { useState } from "react";

const Search = () => {
    const [query, setQuery] = useState(""); 
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); 

    const handleSearch = async () => {
        if (!query.trim()) return; 
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://api.adviceslip.com/advice/search/${query}`);
            if (!response.ok) {
                throw new Error("Failed to fetch results");
            }
            const data = await response.json();

           
            if (data.slips) {
                setResults(data.slips); 
            } else {
                setResults([]); 
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px", color: "white", fontFamily: "Charm, sans-serif"}}>
            <h1>Wisdom You Seek is Just a Click Away..</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter a word..."
                style={{
                    padding: "10px",
                    fontSize: "1rem",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    marginRight: "10px",
                    
                }}
            />
            <button
                onClick={handleSearch}
                style={{
                    padding: "10px 20px",
                    fontSize: "1rem",
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Search
            </button>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red "}}>Error: {error}</p>}
            <ul style={{ marginTop: "20px", listStyleType: "none", padding: 0, fontSize: "2rem" }}>
            {results.length > 0 ? (
                    results.map((result) => (
                        <li
                            key={result.id}
                            style={{ margin: "10px 0" }}
                        >
                            {result.advice}
                        </li>
                    ))
                ) : (
                    !loading && !error && <p>No results found.</p>
                )}
            </ul>
        </div>
    );
};

export default Search;