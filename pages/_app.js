import '../styles/globals.css'
import "react-modern-calendar-datepicker/lib/DatePicker.css";
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
