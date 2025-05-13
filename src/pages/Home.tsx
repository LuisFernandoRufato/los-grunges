import grungeBg from '../assets/img/grunge.webp';

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Imagem de fundo */}
      <img
        src={grungeBg}
        alt="Plano de fundo grunge"
        className="absolute inset-0 w-full h-full object-fill z-0"
      />

      {/* Camada escura sobre a imagem */}
      <div className="absolute inset-0 bg-black/80 z-10" />

      {/* Conteúdo central */}
      <div className="relative z-20 flex items-center justify-center h-full text-white px-4">
        <div className="bg-transparent p-12 max-w-5xl text-center rounded-xl">
          <h2 className="text-4xl font-extrabold mb-6">
            O melhor do Grunge & Post Grunge
          </h2>

          <p className="text-2xl mb-6 leading-relaxed">
            LOS GRUNGES é um projeto acústico que revive a essência crua e emocional do grunge e post-grunge em versões desplugadas, intensas e sinceras.
          </p>

          <p className="text-2xl mb-6 leading-relaxed">
            Inspirados por bandas como Nirvana, Alice in Chains, Pearl Jam, Soundgarden e Stone Temple Pilots, levamos para o palco arranjos acústicos que preservam a alma sombria e melódica dessa geração marcada pela introspecção e rebeldia.
          </p>

          <p className="text-2xl leading-relaxed">
            Nosso repertório inclui também releituras de nomes como Silverchair, Creed, Three Days Grace, Nickelback e Foo Fighters, adaptadas ao formato acústico, mas mantendo a força das letras e a atmosfera densa que definem o estilo. É grunge de raiz, com violões, vozes rasgadas com emoção à flor da pele.
          </p>
        </div>
      </div>
    </div>
  );
}