import { useState } from "react"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Main from "./components/main/Main"


function App() {

  const [searchValue, setSearchValue] = useState('')
  const [basketSt, setBasketSt] = useState(false)

  return (
    <>
      <Header basketSt={basketSt} setBasketSt={setBasketSt} setSearchValue={setSearchValue}/>
      <Main searchValue={searchValue} basketSt={basketSt}/>
      <Footer/>
    </>
  )
}

export default App
