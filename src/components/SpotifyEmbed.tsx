import React from 'react';

const SpotifyEmbed = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="backdrop-blur-lg bg-white/30 rounded-2xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-timer-purple">Workout Playlist</h2>
        <iframe
          src="https://open.spotify.com/embed/playlist/4d3PqXgP9C9GhdmHsuztXx"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default SpotifyEmbed;