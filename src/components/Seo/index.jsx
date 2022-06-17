import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

const Seo = ({
  title = 'Home',
  description = 'FILMCOIN is the motion picture digital currency of choice that aims to decentralize the film and television content production industries.',
  ...props
}) => {
  const { pathname } = useLocation()
  const url = import.meta.env.REACT_APP_URL

  const seo = {
    title,
    description,
    titleTemplate: '%s | FILMCOIN',
    image: `${url}/logo192.png`,
    url: `${url}/#${pathname}`
  }

  return (
    <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      <link rel='canonical' href={url} />
      <meta name='keywords' content={props.keywords || 'FILMCOIN, film coin, utility token, blockchain-based, limited offering, film, television, contribution'} />

      {seo.title && <meta property='og:title' content={seo.title} />}
      {seo.description && <meta property='og:description' content={seo.description} />}
      <meta property='og:site_name' content='FILMCOIN' />
      {seo.url && <meta property='og:url' content={seo.url} />}
      {seo.image && <meta property='og:image' content={seo.image} />}

      {seo.title && <meta name='twitter:title' content={seo.title} />}
      {seo.description && <meta name='twitter:description' content={seo.description} />}
      {seo.image && <meta name='twitter:image' content={seo.image} />}
      {seo.url && <meta property='twitter:url' content={seo.url} />}
      <meta name='twitter:card' content='summary_large_image' />
    </Helmet>
  )
}

export default Seo
