import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Bogota", "Pereira", "Caparrapi", "La Dorada"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
