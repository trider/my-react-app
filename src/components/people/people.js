import { people } from "./data";
import { getImageUrl } from "../utils";
import './people.css'


const ListP = () => {
 const listItems = people.map(person =>
   <li key={person.id}>
     <img
       src={getImageUrl(person)}
       alt={person.name}
     />
     <p>
       <b>{person.name}</b>
         {' ' + person.profession + ' '}
         known for {person.accomplishment}
     </p>
   </li>
 );
 return <ul style={{textAlign:'left'}}>{listItems}</ul>;
}

export default ListP