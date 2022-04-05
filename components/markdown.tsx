
import { FunctionComponent } from 'react'

type MarkdownProbs = {}

const Markdown: FunctionComponent<MarkdownProbs> = ({children}) => {
  return (
    <article className="prose">
      {children}
    </article>
  ) 
}

export default Markdown;