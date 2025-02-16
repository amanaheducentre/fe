import MainHero from "@/components/common/MainHero";

export default function Home() {
  return (
    <div>
      <MainHero image="https://i0.wp.com/blog.lovevery.com/wp-content/uploads/2024/12/2022_11_07_GM_Fall-Winter_LS_1393_1_v1_2048x1214.jpg" />
      <div className="bg-accent h-max w-full">
        <div className="absolute pt-9 pl-9 md:pl-16 md:w-[60%]">
          <div className="text-7xl md:text-8xl font-bold">
            <span>Kenapa Harus Amanah ?</span>
          </div>
        </div>
        <div className="w-full h-max flex flex-wrap justify-around pt-64">
          <div className="flex w-52 flex-col gap-4 p-6">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex w-52 flex-col gap-4 p-6">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex w-52 flex-col gap-4 p-6">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex w-52 flex-col gap-4 p-6">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex w-52 flex-col gap-4 p-6">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex w-52 flex-col gap-4 p-6">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
