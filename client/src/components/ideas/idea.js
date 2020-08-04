import React from 'react';
import './idea.css';

export default function Idea(props) {

    const { title, createdAt, author, score } = props.idea;

    return (
        <div className="idea card border-light mb-3 shadow-sm" style={{ maxWidth: "20rem" }}>
            <div className="card-header">
                <div className="infos">
                    <span>Score : <b>{score}</b></span>
                    <span>{(new Date(createdAt)).toLocaleDateString('fr-FR')}</span>
                </div>
            </div>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <div className="bottom-infos">
                    <span>Author : {author}</span>
                </div>
            </div>
        </div>
    )
}