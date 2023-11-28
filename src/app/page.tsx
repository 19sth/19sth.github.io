import { faCubes, faRss } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: '19sth',
}
 

export default function Home() {
  const apps = [
    {
      title: "Progress",
      description: "Create tasks for developing new habits through tracking.",
      link: "https://19sth.github.io/pwa-progress/",
    },
    {
      title: "Memorise",
      description: "Study with cards, train your knowledge.",
      link: "https://19sth.github.io/pwa-memorise/",
    },
    {
      title: "Check",
      description: "Define, control and track your repeated tasks.",
      link: "https://19sth.github.io/pwa-check/",
    },
    {
      title: "Glyph",
      description: "Encrypt and save your notes and credentials.",
      link: "https://19sth.github.io/pwa-glyph/",
    },
    {
      title: "Whoami",
      description: "Play whoami that has variaty of topics with your friends.",
      link: "https://19sth.github.io/pwa-whoami/",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center  pb-6 pt-8 lg:static lg:w-auto lg:p-4"></p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full flex-col justify-end lg:items-end lg:static lg:h-auto lg:w-auto bg-none">
          <a
            className="flex gap-2 lg:p-0 flex justify-center"
            href="https://github.com/19sth"
            target="_blank"
          >
            an open-source organization
            <FontAwesomeIcon icon={faCubes} className='w-4'/>
          </a>
          <a
            className="flex gap-2 py-5 lg:pt-2 flex justify-center"
            href="/blog"
          >
            blog posts
            <FontAwesomeIcon icon={faRss} className='w-4'/>
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial">
        <div className="relative">
          <span className="text-5xl lg:text-7xl text-black">19</span>
          <span className="text-5xl lg:text-7xl font-thin border-b-8 border-yellow-300 text-black">
            something
          </span>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {apps.map((e) => (
          <a
            key={`app_${e.title}`}
            href={e.link}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-yellow-300 hover:bg-yellow-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {`${e.title} `}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {e.description}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}
