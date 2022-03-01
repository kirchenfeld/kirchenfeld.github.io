import Card from '../components/card'
import Image from 'next/image'
import CardStack from '../components/cardStack'
import Mail from '../components/mail'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <div className='grid grid-cols-3 gap-x-20 gap-y-4'>
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
        <CardStack></CardStack>
        <div className='place-self-end'>
          <Mail mailto=''></Mail>
        </div>
      </div>
    </Layout>
  )
}