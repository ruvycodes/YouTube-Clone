
import { Provider } from 'react-redux'
import './App.css'
import Header from './Header'
import SideBar from './SideBar'
import appStore from './Utils/appStore'

function App() {

  return (
    <>
      <Provider store={appStore}>
      <Header />
      <SideBar />
      </Provider>
    </>
  )
}

export default App
