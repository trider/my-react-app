function Button({ onClick, children }) {
 return (
  <button onClick={e => {
   e.stopPropagation();
   onClick();
  }}>
   {children}
  </button>
 );
}


export default function ToolbarP2() {
 return (
  <section>
   <h2>ToolbarP</h2>
   <div className="Toolbar" onClick={() => {
    alert('You clicked on the toolbar!');
   }}>
    <Button onClick={() => alert('Playing!')}>
     Play Movie
    </Button>
    <Button onClick={() => alert('Uploading!')}>
     Upload Image
    </Button>
   </div>
  </section>
 );
}
