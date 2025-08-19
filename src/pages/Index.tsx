import { Button } from "@/components/ui/button";

const Index = () => {
  const handleButtonClick = () => {
    try {
      window.open("https://t.me/babykk010", "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Erro ao abrir link:", error);
      // Fallback para navegadores que bloqueiam popup
      window.location.href = "https://t.me/babykk010";
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative">
      {/* Hero Title */}
      <div className="text-center mb-16 z-10">
        <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-white via-pink-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
          BABYKK
        </h1>
        <div className="h-2 w-32 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-4 rounded-full shadow-lg"></div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-8 items-center z-10">
        <Button 
          variant="babykk_buy" 
          size="xl"
          className="w-80 h-20 text-3xl font-black tracking-wider transform transition-all duration-300 hover:scale-105"
          onClick={handleButtonClick}
          type="button"
        >
          BUY
        </Button>
        
        <Button 
          variant="babykk_preview" 
          size="xl"
          className="w-80 h-20 text-3xl font-black tracking-wider transform transition-all duration-300 hover:scale-105"
          onClick={handleButtonClick}
          type="button"
        >
          FREE PREVIEWS
        </Button>
      </div>
      
      {/* Decorative elements */}
      <div className="fixed top-10 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-transparent opacity-20 animate-bounce z-0"></div>
      <div className="fixed bottom-10 right-10 w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-transparent opacity-20 animate-bounce delay-1000 z-0"></div>
      <div className="fixed top-1/2 right-20 w-12 h-12 rounded-full bg-gradient-to-br from-pink-300 to-transparent opacity-15 animate-pulse z-0"></div>
    </div>
  );
};

export default Index;