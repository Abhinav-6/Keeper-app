import "./styles.css";
import Header from "./Header";
import Notes from "./Notes";
import Footer from "./Footer";
import notesArray from "./notes";
console.log(notesArray);

export default function App() {
  return (
    <div className="App">
      <Header />
      <Notes title="hello" content="hejkdj" />
      <Footer />
    </div>
  );
}
