import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Provider } from 'react-redux'
import store from './utils/store'
import MainContainer from './components/MainContainer'


function App() {
  return (
    <>
      <Provider store={store}>

        <Header />
        <div className='flex'>
          <Sidebar />
          <MainContainer />
        </div>
      </Provider>
    </>
  )
}

export default App
