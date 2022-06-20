import '../styles/globals.css'

import GlobalContext from '../context/global'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return (

    <GlobalContext>
  <Navbar />
  <Component {...pageProps} />
  </GlobalContext>

  )
}

export default MyApp
