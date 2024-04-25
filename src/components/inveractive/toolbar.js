function Button({ onClick, children }) {
 return (
   <button onClick={onClick}>
     {children}
   </button>
 );
}

function PlayButton({ movieName }) {
 function handlePlayClick() {
   alert(`Playing ${movieName}!`);
 }

 return (
   <Button onClick={handlePlayClick}>
     Play "{movieName}"
   </Button>
 );
}

function UploadButton() {
 return (
   <Button onClick={() => alert('Uploading!')}>
     Upload Image
   </Button>
 );
}

function Buttons({ onPlayMovie, onUploadImage }) {
 return (
   <div>
     <Button onClick={onPlayMovie}>
       Play Movie
     </Button>
     <Button onClick={onUploadImage}>
       Upload Image
     </Button>
   </div>
 );
}



export default function Toolbar() {
 return (
   <div>
     <h2>Toolbar</h2>
     <PlayButton movieName="Kiki's Delivery Service" />
     <UploadButton />
     <h2>Buttons</h2>
     <Buttons
      onPlayMovie={() => alert('Playing!')}
      onUploadImage={() => alert('Uploading!')}
    />
   </div>
 );
}
