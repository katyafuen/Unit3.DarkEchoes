import { useState } from "react";
import { episodeList } from "./data";
import "./App.css";

function App() {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <div className="app">
      <h1>Dark Echoes</h1>
      <div className="content">
        <div className="episodes-list">
          <h2>Episodes</h2>
          <div className="episodes">
            {episodeList.map((episode) => (
              <div
                key={episode.id}
                className={`episode-item ${
                  selectedEpisode?.id === episode.id ? "selected" : ""
                }`}
                onClick={() => setSelectedEpisode(episode)}
              >
                {episode.title}
              </div>
            ))}
          </div>
        </div>

        <div className="episode-details">
          {selectedEpisode ? (
            <>
              <h2>Episode {selectedEpisode.id}</h2>
              <h3>{selectedEpisode.title}</h3>
              <p>{selectedEpisode.description}</p>
              <button className="watch-button">Watch now</button>
            </>
          ) : (
            <p className="select-prompt">Select an episode to view details</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
