export default function VideoSection() {
  return (
    <section className="max-w-[1000px] mx-auto px-4 py-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center justify-center gap-2">
        <img src="/logo.webp" alt="Logo" className="w-8 h-8" />
        Dica da Nany!
      </h2>

      <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-xl">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/Fbkc5b1oKp8"
          title="Como dobrar lençol de elástico"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
