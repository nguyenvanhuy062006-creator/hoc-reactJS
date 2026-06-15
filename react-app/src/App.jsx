import './App.css'
import Header from "././components/Header.jsx";
import DinamicValue from "././DinamicValue/DinamicValue.jsx"
import "././index.css"
import TabButton from './components/TabButton.jsx';
function App() {
  return (
    <>
    <Header />
    <DinamicValue />
    <main>
      <section id ="example">
        <h2>Examples</h2>
        <menu>
          <TabButton>Components</TabButton>
          <TabButton>JSX</TabButton>
          <TabButton>STATE</TabButton>
          <TabButton>YES</TabButton>
        </menu>

      </section>
    </main>
    </>
  )
}

export default App
