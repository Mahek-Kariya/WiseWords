import React from "react";
import useRandomAdvice from "../Hooks/UseRandomAdvice";

const Random = () => {
    const { advice, loading, error } = useRandomAdvice();

    return (
        <div style={{ textAlign: "center", marginTop: "50px", color: "white"}}>
            <h1>Random Advice</h1>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {!loading && !error && (
                <p style={{ fontSize: "1.5rem", fontStyle: "italic", margin: "20px 0" }}>
                    "{advice}"
                </p>
            )}

            <button
                onClick={() => window.location.reload()}
                style={{
                    padding: "10px 20px",
                    fontSize: "1.2rem",
                    backgroundColor: "white",
                    color: "black",
                    border: "none",
                    fontFamily: "Charm, sans-serif",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}>Generate random advice</button>
        </div>
    );
};

export default Random;