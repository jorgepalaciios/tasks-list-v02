import Image from 'next/image'
import TasksList from './components/taskList'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-stretch p-24">
      <div className="z-10 max-w-5xl w-60% items-center justify-center gap-10 font-mono text-sm">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 dark:drop-shadow-[0_0_0.1rem_#ffffff70] mb-3">
          Get your tasks organized here!&nbsp;
          {/* <code className="font-mono font-bold">src/app/page.tsx</code> */}
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://japc-dev-portfolio.web.app"
            target='_blank'
            rel="noopener noreferrer"
          >
            By{' '}
            Jorge Palacios
            <Image
              src="/check.svg"
              alt="JAPC Logo"
              className="dark:drop-shadow-[0_0_0.1rem_#ffffff70]"
              width={15}
              height={15}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative my-5 flex  ">
        <Image
          className="relative dark:drop-shadow-[0_0_0.2rem_#ffffff70] "
          src="/check.svg"
          alt="Check Logo"
          width={80}
          height={37}
          priority
        />
      </div>
      <div>
        <TasksList />
      </div>
    </main>
  )
}
