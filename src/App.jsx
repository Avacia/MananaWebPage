import './App.css'
import HeadBar from './assets/component/HeadBar/HeadBar'
import Body from './assets/component/Body/Body'
import Info from './assets/component/Info/Info'
import SignUp from './assets/component/SignUP/SignUp'
import Footer from './assets/component/Footer/Footer'

function App() {

  return (
    <div className="app">
      <HeadBar />
      <Body />
      <Info />
      <SignUp />
      <Footer />
    </div>
  )
}

export default App
