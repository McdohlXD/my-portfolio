export default function Technology() {
  const currentTech: string[] = [
    'React',
    'Tailwind CSS',
    'Node.js / Express',
    'MongoDB',
  ];
  const pastTech: string[] = ['VB6', 'PHP', 'MySQL', 'Bootstrap'];
  return (
    <section className="py-16 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">My Tech Stack</h2>

        {/* Currently Learning */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            Currently Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {currentTech.map((tech) => (
              <span
                key={tech}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg text-lg shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-4 text-gray-700 text-sm">
            I'm still improving in these technologies.
          </p>
        </div>

        {/* Used in the Past */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">
            Used in the Past
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {pastTech.map((tech) => (
              <span
                key={tech}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg text-lg shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-4 text-gray-700 text-sm">
            I have experience with these but don't actively use them.
          </p>
        </div>
      </div>
    </section>
  );
}
