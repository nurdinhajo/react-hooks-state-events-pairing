import video from "../data/video.js";
import Rate from "./Rate.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">      
      <Rate 
        video ={video}
      />
    </div>
  );
}

export default App;
