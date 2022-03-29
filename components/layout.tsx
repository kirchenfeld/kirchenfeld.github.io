import Link from 'next/link'
import { FunctionComponent } from 'react'
import Mail from '@components/mail'

type LayoutProbs = {}

const Layout: FunctionComponent<LayoutProbs> = ({children}) => {
    return (
      <div className="h-screen flex flex-col divide-y divide-black">
        <header className='flex px-10 md:px-20 pt-10 bg-pink-light '>
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
        <main className='grow p-10 md:p-20 h-max bg-pink-light'>
          {children}
        </main>
        <footer className='bg-pink-light flex px-10 md:px-20 pb-10'>
          <span className='grow'></span>
          <h2>COPYLEFT BLABLA</h2>
          <span className='p-5'></span>
          <div className='place-self-end'>
            <Mail mailto='mailto:innovationscouts@gymkirchenfeld.ch'></Mail>
          </div>
        </footer>
      </div>
    ) 
}

export default Layout;