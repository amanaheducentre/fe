export default function MainHero({ image }: { image: string }) {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "70% 0%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-content text-center -z-0">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold text-white">Pendidikan Terbaik, Untuk Anak</h1>
          <button className="btn btn-lg btn-accent">MULAI SEKARANG</button>
        </div>
      </div>
    </div>
  );
}
