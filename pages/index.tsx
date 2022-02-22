import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/card'
import Mail from '../components/mail'

// TODO: refactor and move into _document component:
// https://nextjs.org/docs/advanced-features/custom-document
export default function Home() {
  return (
    <>
      <Head>
        <title>INNOSCOUT WEBSITE V1.1</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' /> 
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <div className="h-screen flex flex-col bg-pink-light divide-y">
        <header className='flex px-20 pt-10'>
          <h2>INNOSCOUT WEBSITE V1.1</h2>
          <span className='grow'></span>
          <h2>MENU</h2>
        </header>
        <main className='grow grid grid-cols-3 gap-x-20 gap-y-4 p-20'>
          <Card title='Finde Uns'>
            <div className='flex flex-col'>
              <p>
                Dienstag <br />
                13:00 - 16:00 <br />
                Raum 007 <br />
              </p>
              <Image 
                width="370px"
                height="290px"
                src={"https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/801637ae342dbd1.png"}
              />
              <p className='text-xs'>
                We have good coffee.
              </p>
            </div>
          </Card>
          <Card title='test'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </Card>
          <div className='place-self-end'>
            <Mail mailto=''></Mail>
          </div>
        </main>
        <footer className='flex px-20 pb-10'>
          <span className='grow'></span>
          <h2>COPYLEFT BLABLA</h2>
        </footer>
      </div>
    </>
  )
}