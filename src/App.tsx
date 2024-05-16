import MainLayout from "./components/Layout/MainLayout"
import Button from "./components/ui/Button"
import Container from "./components/ui/Container"


function App() {

  return (
    <Container>
      <h1>This is a h1 tag</h1>
      <div className="h-screen w-full flex justify-center items-center">
        <Button className={"bg-green-500"}/>
      </div>
    </Container>
  )
}

export default App
