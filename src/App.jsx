import React from 'react'
import Navbar from './components/Navbar'
import Journal from './components/Journal'
import data from './data'
import './App.css'

const App = () => {
  // const journalData=data.map(item=>{
  //   return <Journal
  //           key={item.id}
  //           item={item}
  //            />
  // })
  return (
    <div>
      <Navbar />
     {/* {journalData} */}
    </div>
  )
}

export default App