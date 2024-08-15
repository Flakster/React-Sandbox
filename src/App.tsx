import "./App.css";
import ListGroup from "./components/ListGroup";

const handleOnSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  return (
    <>
      <ListGroup
        items={["Lenguazaque","Ubaté", "Carupa", "Sutatausa", "Fuquene"]}
        onSelectItem={handleOnSelectItem}
      />
    </>
  );
}

export default App;
