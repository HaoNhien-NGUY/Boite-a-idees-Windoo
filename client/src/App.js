import React, { useState, useEffect } from 'react';
import { getAllIdeas } from './API';
import './App.css';

import Idea from './components/ideas/idea';
import Filters from './components/filters/filters';

function App() {
  const [ideas, setIdeas] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getAllIdeas(data => {
      setIdeas(data);
    });
  }, []);

  function searchChange(event) {
      setSearchInput(event.target.value)
  }

  function sortScore ($order) {
    if($order === 1) {
      const sorted = ideas.slice(0).sort((a, b) => a.score  - b.score );
      setIdeas(sorted);
    } else {
      const sorted = ideas.slice(0).sort((a, b) => b.score - a.score);
      setIdeas(sorted);
    }
  }

  function sortDate ($order) {
    if($order === 1) {
      const sorted = ideas.slice(0).sort((a, b) => new Date(a.createdAt).getTime()  - new Date(b.createdAt).getTime() );
      setIdeas(sorted);
    } else {
      const sorted = ideas.slice(0).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime() );
      setIdeas(sorted);
    }
  }

  return (
    <div className="App">
      <h1 className="text-center">Mini boîte à idées</h1>
      <div className="container">
        <div className="row justify-content-between" style={{padding: "0 1rem 0 1rem", marginBottom: "2rem"}}>
          <Filters sortDate={sortDate} sortScore={sortScore} searchChange={searchChange} />
        </div>
        <div className="row">
          {ideas.filter(idea => idea.title.toLowerCase().includes(searchInput.toLowerCase())).map((idea) => { 
            return (
              <div key={idea.id} className="col-lg-4 col-md-6 col-sm-12"> 
                  <Idea idea={idea} />
              </div>)
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
