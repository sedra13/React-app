import ListGroup from "./components/ListGroup";
//import Alert from "./components/Alert";
//import Button from "./components/Button";
//import { useState } from "react";
/*function App() {
  const [alertVisible,setAlertVisibility]=useState(false)
  return (
    <div>
     {alertVisible&& <Alert onClose={()=>setAlertVisibility(false)}>Alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisibility(true )}>
        Button
      </Button>
    </div>
  );
}

 
*/
function App() {
  let items = ["san francisco", "paris", "tokyo", "florida", "london"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {""}
      <ListGroup
        items={items}
        heading="cities"
        onSelectItem={handleSelectItem}
      />
      {""}
    </div>
  );
}

export default App;
