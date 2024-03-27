
import { Provider } from 'react-redux'
import './App.css'
import Header from './Header'
import SideBar from './SideBar'
import appStore from './Utils/appStore'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Provider store={appStore}>
        <Header />
        <div className='flex'>
          <SideBar />
          <Outlet />
        </div>
      </Provider>
    </>
  )
}

export default App
