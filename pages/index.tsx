import Image from 'next/image'
import Card from '@components/card'
import Layout from '@components/layout'

export default function Home() {
  return (
    <Layout>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-x-10 md:gap-x-20 gap-y-4'>
        <Card title='Finde Uns'>
          <div className='flex flex-col'>
            <p>
              Dienstag <br />
              13:00 - 16:00 <br />
              Raum 125 <br />
            </p>
            <Image 
            layout='responsive'
              width="370px"
              height="290px"
              src={"https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/801637ae342dbd1.png"}
            />
            <p className='text-xs'>
              We have good coffee.
            </p>
          </div>
        </Card>
        <Card title='Unsere Liste'>
          <div className="flex flex-col">
            <p>
              Ja auch wir haben eine Liste zusammengestellt! 
            </p>
            <br />
            <p>
              Aber es sind nur die <a target="blank" className='underline underline-offset-2' href="https://view.genial.ly/620bb0fa7a6e8a0018dfe470/guide-tools">Besten</a>.
            </p>
          </div>
        </Card>
        <Card title='Workshops'>
          <div className="flex flex-col">
            <p>
              Zu verschiedenen Themen wollen wir auch Workshops anbieten. 
            </p>
            <br />
            <p>
              Weitere Infos folgen.
            </p>
          </div>
        </Card>
      </div>
    </Layout>
  )
}