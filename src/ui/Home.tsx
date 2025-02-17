export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center  text-white px-6">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold ">
          Hi, I'm <span className="text-blue-900">Mark Llanera Villegas</span>
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-100">
          A passionate
          <span className="font-semibold text-blue-900">
            {' '}
            <i>Web Developer</i>{' '}
          </span>
          crafting modern web experiences with React & Tailwind CSS.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <a
            href="#projects"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
