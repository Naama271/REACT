
import './box.css';

function Box(props) {
 //  console.log(props)
  return (<div>
 <div className="box"   style={{animation: "mymove 4s"}}> </div>
 <div className="box"   style={{animation: "mymove 2s"}}> </div>
  <div className="box"   style={{props}}></div>

    </div>
  );
}

export default Box;
