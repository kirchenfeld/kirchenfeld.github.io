import Image from 'next/image'
import Card from '@components/card'
import Layout from '@components/layout'
import Grid from '@components/grid'
import Column from '@components/column'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <Grid>
        <Card title='Finde Uns'>
          <Column>
            <p>
              Dienstags <br />
              13:00 - 16:00 <br />
              Raum 125 <br />
            </p>
            <img
              width="370px"
              height="290px"
              src={"https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/801637ae342dbd1.png"}
            />
            <p className='text-xs'>
              We have good coffee.
            </p>
          </Column>
        </Card>
        <Card title='Unsere Liste'>
          <Column>
            <p>
              Auch wir haben eine Liste mit Apps zusammengestellt. 
            </p>
            <br />
            <p>
              Aber es sind nur die <a target="blank" className='underline underline-offset-2' href="https://view.genial.ly/620bb0fa7a6e8a0018dfe470/guide-tools">Besten</a>.
            </p>
          </Column>
        </Card>
        <Card title='Workshops'>
          <Column>
            <p>
              Zu verschiedenen Themen wollen wir auch Workshops anbieten. 
            </p>
            <br />
            <p>
              Weitere Infos unter <Link href="/workshops"><a className='underline underline-offset-2'>Workshops</a></Link>.
            </p>
          </Column>
        </Card>
      </Grid>
    </Layout>
  )
}
