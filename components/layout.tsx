import Link from 'next/link'
import { FunctionComponent } from 'react'

type LayoutProbs = {}

const Layout: FunctionComponent<LayoutProbs> = ({children}) => {
    return (
      <div className="h-screen flex flex-col bg-pink-light divide-y">
        <header className='flex px-20 pt-10'>
          <h2>INNOSCOUT WEBSITE V1.1</h2>
          <span className='grow'></span>
          <Link href="/">
              <a>HOME</a>
          </Link>
          <span className='px-2'></span>
          <Link href="/about">
              <a>WIR</a>
          </Link>
        </header>
        <main className='grow p-20'>
          {children}
        </main>
        <footer className='bg-pink-light flex px-20 pb-10'>
          <span className='grow'></span>
          <h2>COPYLEFT BLABLA</h2>
        </footer>
      </div>
    ) 
}

export default Layout;