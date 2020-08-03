import React from 'react';
import './filters.css';

export default function Filters(props) {

    const { sortDate, sortScore, searchChange } = props;

    return (
        <>
            <div className="sort-date col-4">
                <span className="sort-title">Sort by date : </span>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary" onClick={() => sortDate(1)}>ASC</button>
                    <button type="button" className="btn btn-primary" onClick={() => sortDate(0)}>DESC</button>
                </div>
            </div>

            <div className="sort-score col-4">
                <span className="sort-title">Sort by score : </span>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary" onClick={() => sortScore(1)}>ASC</button>
                    <button type="button" className="btn btn-primary" onClick={() => sortScore(0)}>DESC</button>
                </div>
            </div>


            <div className="col-4">
                <input className="form-control" style={{float: 'right'}} onChange={searchChange} />
            </div>
        </>
    )
}
