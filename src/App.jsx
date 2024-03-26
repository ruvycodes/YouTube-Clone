
import { Provider } from 'react-redux'
import './App.css'
import Header from './Header'
import SideBar from './SideBar'
import appStore from './Utils/appStore'
import VideoContainer from './VideoContainer'
import TagList from './TagList'

function App() {

  return (
    <>
      <Provider store={appStore}>
        <Header />
        <TagList />
        <div className='flex'>
          <SideBar />
          <VideoContainer />
        </div>
      </Provider>
    </>
  )
}

export default App
