import './App.css'
import Header from './components/Header'
import { Provider } from 'react-redux'
import store from './utils/store'
import Body from './components/Body'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import WatchVideo from './components/WatchVideo'


function App() {
  const appRouter = createBrowserRouter([{
    path: "/",
    element: (
    <>
      <Header />
      <Body />
    </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "/watch",
        element: <WatchVideo />
      }
    ]
  }])

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  )
}

export default App
