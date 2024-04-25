import { getImageUrl } from '../utils.js';

const Avatar = (props) => {
 


  return (
    <img
      className="avatar"
      src={getImageUrl(props.person)}
      alt={props.person.name}
      width={props.size}
      height={props.size}
    />
  );
}

export default Avatar;