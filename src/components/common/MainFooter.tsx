import Link from "next/link";

export default function MainFooter() {
  return (
    <div className="bg-accent-content bottom-0 w-full h-max">
      <div className="flex justify-center text-white">
        <div className="py-2 px-6 text-sm md:hidden text-center">
          <span>&copy; 2025, Amanah Edu Centre All Rights Reserved.</span>
        </div>
        <div className="hidden md:block w-[80%] text-end py-6">
          <span>&copy; 2025, Amanah Edu Centre All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
}
