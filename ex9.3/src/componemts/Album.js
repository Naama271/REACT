
//import './card.css';

function Album(props) {
    console.log(props)
  return (
    <div className="card" >
       <h2> {props.title}</h2>
       <h3> {props.artist} </h3>
      < img src= {props.img}></img>
     length: {props.length}
        
        
        <a href={props.link}> listen to a song</a>

    </div>
  );
}

export default Album;
