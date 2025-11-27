import Footer from "../components/footer";

export default function About() {
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center px-6 py-16">
        {/* Titre + sous-titre */}
        <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg text-center">
          Bastien Forest
        </h1>

        <p className="text-xl text-gray-300 mb-12 max-w-3xl text-center drop-shadow-sm">
          Développeur passionné, spécialisé dans l’informatique et la domotique.
          Toujours prêt à créer des solutions simples, efficaces et élégantes.
        </p>

        {/* Liens sociaux */}
        <div className="flex flex-wrap gap-6 justify-center mb-12">
          <a
            href="https://www.linkedin.com/in/bastien-forest-294b3a2bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-700 hover:bg-blue-600 rounded-lg shadow-lg transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.061-1.867-3.061-1.868 0-2.154 1.459-2.154 2.967v5.698h-3v-10h2.884v1.367h.041c.402-.764 1.384-1.567 2.847-1.567 3.042 0 3.604 2.001 3.604 4.604v5.596z" />
            </svg>
            LinkedIn
          </a>

          <a
            href="https://github.com/Bastien150/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg shadow-lg transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.931 0-1.31.468-2.38 1.236-3.22-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.287-1.552 3.292-1.23 3.292-1.23.655 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.609-2.807 5.625-5.479 5.921.43.371.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.287 0 .321.216.694.825.576 4.765-1.589 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>

        {/* Contact email */}
        <div className="text-center text-gray-300">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:bastienforest01@gmail.com"
              className="underline hover:text-white"
            >
              bastienforest01@gmail.com
            </a>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
