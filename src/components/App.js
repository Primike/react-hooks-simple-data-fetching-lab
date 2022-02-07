// create your App component here
import { useEffect, useState } from 'react'
function App() {
    const [data, setData] = useState()
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((r) => r.json())
          .then((data) => {
            setData(data.message);
          });
    }, []);

    return (
        <>
            {data ? <img src = {data} alt="A Random Dog"/> : <p>Loading...</p>}
        </>
    )
}

export default App