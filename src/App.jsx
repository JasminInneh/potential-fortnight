import {useState, useEffect} from "react"
import Nav from './components/Nav'
import Header from './components/Header'
import Feed from './components/Feed'
import PopUp from './components/PopUp'


const App = () => {
  const [user, setUser] = useState(null)

  const userId = "121dc7b7-abec-452f-9fb4-5ff9e052c482"

  const getUser = async () => {
    
    try {
      const response = await fetch(``)
      const data = await response.json()
      setUser(data[0])

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [])
  console.log(user)


  return (
    <>
      {user && <div className="app">
        <Nav url={user.instagram_url}/>
        <Header />
        <Feed/>
        {/* <PopUp/> */}
      </div>}
    </>
   
  )
}

export default App;