import { Outlet } from 'react-router-dom';
import AppHeader from './components/AppHeader';

const App = () => {
  return(
    <>
    <AppHeader />
    <Outlet />
    </>
  )
}

export default App
