import { faker } from '@faker-js/faker';
import { useRef, useState, useEffect } from "react"
import { useResizeListener } from '../hooks/useResizeListener';

const randomName = faker.name.fullName(); // Rowan Nikolaus

function Home() {
  const [text, setText] = useState("Hello")
  const edits = useRef()

  return (
    <>
      <h1>Home</h1>
      <span>{randomName}</span>
    </>
  )
}

export default Home