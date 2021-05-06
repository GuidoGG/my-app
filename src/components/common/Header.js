import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>

            <div style={{ textAlign: "center" }}>
                <Link to="/home">
                    <button> Home </button>
                </Link>

                <Link to="/">
                    <button> Test </button>
                </Link>

                <Link to="/inputpage">
                    <button> Input </button>
                </Link>
            </div>
        </div>


    )
};

