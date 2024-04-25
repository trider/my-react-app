import Quiz from "./Quiz";
import FeedbackForm from "./FeedBack";
import NameCheck from "./NameCheck";
import Menu from "./Snacks";
import Card from "../basic/Card";
import TravelPlan from "./places/TravelPlan";
import Accordion from "./Accoridion";
import Counter1 from "./Counters/Counters1";
import Counter2 from "./Counters/Counters2";
import Counter3 from "./Counters/Counters3";
import Counter4 from "./Counters/Counters4";
import Scoreboard from "./Counters/Counters5";
import Messenger from "./Contacts/Contacts";
import TaskApp from "./Reducers/TaskApp";
import TaskApp2 from "./Reducers/TaskApp2";
import TaskApp3 from "./Tasks/TaskApp";
import TaskApp4 from "./TasksContext/TaskApp"
import Page from "./Sections/Page";

import './styles.css';
import './Counters/counters.css';
// import './places/places.css';

const props = { 
 show: { 
  quiz: false,
  feedBack: false,
  nameCheck: false,
  menu: false,
  travelPlan: false,
  accordion:false,
  counter1:false,
  counter2:false,
  counter3:false,
  counter4:false,
  scoreboard:false,
  messenger:false,
  taskApp:false,
  taskApp2:false,
  taskApp3:false,
  taskApp4:true,
  page:false


 } 
};


const StateManagement = () => {


  return (
    <div>
     {props.show.quiz && <Quiz />}
     {props.show.feedBack && <FeedbackForm />}
     {props.show.nameCheck && <NameCheck />}
     {props.show.menu && 
      <Card>
        <Menu />
      </Card>}
      {props.show.travelPlan && <TravelPlan /> }
      {props.show.accordion &&  <Accordion />}
      {props.show.counter1 && <Counter1 />}
      {props.show.counter2 && <Counter2 />}
      {props.show.counter3 && <Counter3 />}
      {props.show.counter4 && <Counter4 />}
      {props.show.scoreboard && <Scoreboard />}
      {props.show.messenger && <Messenger />}
      {props.show.taskApp && <TaskApp />}
      {props.show.taskApp2 && <TaskApp2 />}
      {props.show.page && <Page />}
      {props.show.taskApp3 && 
        <Card>
          <TaskApp3 />
          </Card>
      
      }
      {props.show.taskApp4 && 
        <Card>
          <TaskApp4 />
          </Card>
      
      }
      
    </div>
  );
}

export default StateManagement;