import DataTable from './componet/allticket';
import './App.css';

function App() {
  
    const handleClick = (event) => {
      event.preventDefault();
      fetch('http://localhost:3001/dbCreate',{
        method:"Post"
      }
      
      )
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
        window.location.reload()
    };
  
    return (
      <div>
        <DataTable />

        <button onClick={handleClick} className ="button" >Fetch</button>
      </div>
    );

}

export default App;
