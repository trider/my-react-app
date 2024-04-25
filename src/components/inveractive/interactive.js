import Button from "./button";
import Toolbar from "./toolbar";
import Smash from "./smash";
import ToolbarP from "./propergate";
import ToolbarP2 from "./propergate2";
import Signup from "./signup";

import './interactive.css';

const props = {
  
  show: {
    button: true,
    toolbar: true,
    smash:true,
    toolbarP:true,
    toolbarP2:true,
    signup:true
  }

}


const Interactive = () => {
  return (
    <div>
      {props.show.button && <Button />}
      {props.show.smash && <Smash />}
      {props.show.toolbar && <Toolbar />}
      {props.show.toolbarP && <ToolbarP />}
      {props.show.toolbarP2 && <ToolbarP2 />}
      {props.show.signup && <Signup />}
    </div>
       

  );
}


export default Interactive;