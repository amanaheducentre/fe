"use client";

import { ParallaxBanner } from "react-scroll-parallax";

export default function MainHero({ image }: { image: string }) {
  return (
    <ParallaxBanner
      layers={[
        {
          image: image,
          speed: -25,
          style: { backgroundPosition: "70% 0%" },
        },
      ]}
      className="aspect-[2/1] hero min-h-screen min-w-screen"
    >
      <div className="hero-content text-center -z-0">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold text-white">Pendidikan Terbaik, Untuk Anak</h1>
          <button className="btn btn-lg btn-accent">MULAI SEKARANG</button>
        </div>
      </div>
    </ParallaxBanner>
  );
}
