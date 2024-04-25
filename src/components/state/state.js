import Sculpture from "./Sculptures";
import Gallery from "./Gallery";
import Form from "./Form";
import Counter from "./Counter";
import Counter2 from "./Counter2";
import Counter3 from "./Counter3";
import Counter4 from "./Counter4";
import Increase from "./Increase";
import Message from "./Message";
import MovingDot from "./MovingDot";
import Update from "./Update";
import Update2 from "./Update2";
import Update3 from "./Update3";
import List from "./List";
import List2 from "./List2";
import ShapeEditor from "./Transform";
import CounterList from "./Replace";
import Insert from "./Insert";
import Reverse from "./Reverse";
import BucketList from "./BucketList";
import BucketList2 from "./BucketList2";
import Card from "../basic/Card";

import './state.css';
const props = { 
 show: { 
  sculpture: false,
  gallery: false,
  form: false,
  counter: false,
  counter2: false,
  counter3: false,
  counter4: false,
  increase: false,
  message: false,
  movingDot: false,
  update:false,
  update2:false,
  update3:false,
  list: false,
  list2:false,
  shapeEditor: false,
  counterList: false,
  insert: false,
  reverse: false,
  BucketList: false,
  BucketList2: true

 } 
};


const State = () => { 

 return (
   <div>
     {props.show.sculpture && <Sculpture />}
     {props.show.gallery && 
            <div className="Page">
            <Gallery />
            <Gallery />
          </div>
     
     }
     {props.show.form && <Form />}
     {props.show.counter && <Counter />}
     {props.show.counter2 && <Counter2 />}
     {props.show.counter3 && <Counter3 />}
     {props.show.counter4 && <Counter4 />}
     {props.show.increase && <Increase />}
     {props.show.message && <Message />}
     {props.show.movingDot && <MovingDot />}
     {props.show.update && <Update />}
     {props.show.update2 && <Update2 />}
     {props.show.update3 && <Update3 />}
     {props.show.list && <List />}
     {props.show.list2 && <List2 />}
     {props.show.shapeEditor && <ShapeEditor />}
     {props.show.counterList && <Card><CounterList /></Card>}
     {props.show.insert && <Insert />}
     {props.show.reverse && <Reverse />}
     {props.show.BucketList && <BucketList />}
     {props.show.BucketList2 && <BucketList2 />}
   </div>
 );
};

export default State;