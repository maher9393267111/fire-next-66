import '../styles/globals.css'

import GlobalContext from '../context/global'


function MyApp({ Component, pageProps }) {
  return (

    <GlobalContext>
  
  <Component {...pageProps} />
  </GlobalContext>

  )
}

export default MyApp
