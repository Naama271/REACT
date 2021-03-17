
import './App.css';
import Album from './componemts/Album';

function App() {
  return (
    <div className="box">
 <Album title="blood sugar sex magik" img="https://images-na.ssl-images-amazon.com/images/I/81SOJxLNNyL._SL1444_.jpg" length="35.34" songs="12" artist="RHCP" link="https://www.youtube.com/watch?v=iyu04pqC8lE" />
 <Album title="clifornication" img="https://upload.wikimedia.org/wikipedia/en/thumb/d/df/RedHotChiliPeppersCalifornication.jpg/220px-RedHotChiliPeppersCalifornication.jpg"  length="35.34" songs="12" artist="RHCP" link="https://www.youtube.com/watch?v=iyu04pqC8lE" />
 <Album title="by the way" img="https://upload.wikimedia.org/wikipedia/he/thumb/2/23/Rhcp9.jpg/250px-Rhcp9.jpg" length="35.34" songs="12" artist="RHCP"/>
</div>
  );
}

export default App;
