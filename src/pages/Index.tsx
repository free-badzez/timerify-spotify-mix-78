import Timer from "@/components/Timer";
import SpotifyEmbed from "@/components/SpotifyEmbed";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-timer-purple/20 to-timer-teal/20">
      <div className="container py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-timer-purple">
          Workout Timer
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          <Timer />
          <SpotifyEmbed />
        </div>
      </div>
    </div>
  );
};

export default Index;