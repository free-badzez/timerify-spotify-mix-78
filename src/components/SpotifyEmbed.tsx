import { useSettings } from '@/contexts/SettingsContext';

const SpotifyEmbed = () => {
  const { showSpotify } = useSettings();

  if (!showSpotify) return null;

  return (
    <div className="w-full max-w-sm mx-auto fixed bottom-4 left-4">
      <iframe
        src="https://open.spotify.com/embed/playlist/4d3PqXgP9C9GhdmHsuztXx?theme=1"
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-xl bg-black/20 backdrop-blur-lg"
      />
    </div>
  );
};

export default SpotifyEmbed;