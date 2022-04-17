import Notes from "./Notes";
import notesArray from "../notes";

export default function Main() {
  return (
    <main>
      {notesArray.map((note) => {
        return (
          <Notes key={note.key} title={note.title} content={note.content} />
        );
      })}
    </main>
  );
}
