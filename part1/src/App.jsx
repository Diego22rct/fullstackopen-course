import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total"

const App = () => {
  
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header />
      <Content exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total total={exercises1+exercises2+exercises3} />
    </div>
  )
}

export default App