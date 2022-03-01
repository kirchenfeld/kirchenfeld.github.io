
import { FunctionComponent } from 'react'
import Layout from './layout';

type MdxLayoutProbs = {}

const MdxLayout: FunctionComponent<MdxLayoutProbs> = ({children}) => {
    return (
      <Layout>
        <article className="prose lg:prose-xl">
          {children}
        </article>
      </Layout>
    ) 
}

export default MdxLayout;