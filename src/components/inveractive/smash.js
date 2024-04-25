const Button = ({ onSmash, children }) =>{
 return (
   <button onClick={onSmash}>
     {children}
   </button>
 );
}

const Smash = () => {
 return (
   <div>
    <h2>Smash</h2>
     <Button onSmash={() => alert('Playing!')}>
       Play Movie
     </Button>
     <Button onSmash={() => alert('Uploading!')}>
       Upload Image
     </Button>
   </div>
 );
}

export default Smash;