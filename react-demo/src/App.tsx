
import Banner from "./Banner";
import Slide from "./components/Slide";
import {} from "bootstrap/dist/css/bootstrap.css";

function AppendIcetSuffix(username: string){
    return username + " ICET";
}
function App(){
  const username = "Bihan";
  return (
    <div className="App  text-lg-center ">
      <Banner />
      <h1 className="">Hello {AppendIcetSuffix(username)}</h1>
      <Slide title="bread">Good bread</Slide>
      <Slide title="Bun">Good Bun</Slide>

    </div>
  );
 
}

export default App