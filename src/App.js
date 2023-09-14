import React from 'react'
import { Cube, Nav, Drawer } from './components'
const App = () => {
  const [face, setFace] = React.useState("front");
  const [show, setShow] = React.useState(false);

  const [side, setSide] = React.useState({
    front: "",
    back: "",
    left: "",
    right: ""
  })

  const handlerShow = React.useCallback(() => {
    setShow(prev => !prev)
  }, [])
  const handlerFace = React.useCallback((event) => {
    const target = event.target;
    setFace((prev) => prev = target.value)
  }, [])


  return (
    <div className='wrapper'>
      <Cube face={face} side={side} handlerShow={handlerShow} />

      <Nav handlerFace={handlerFace} />
      <Drawer setSide={setSide} side={side} face={face} show={show} handlerShow={handlerShow} />
    </div>
  )
}

export default App