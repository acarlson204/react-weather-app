import React from "react";

export default function Form() {
    return (
        <div className="container">
            <form>
                <div className="row">
                    <input
                        type="search"
                        className="col form-control search-input"
                        placeholder="Enter a city..."
                        aria-label=".form-control-sm example"
                    />
                    <button type="submit" className="col-2 btn btn-primary">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}
