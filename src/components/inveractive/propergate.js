export default function ToolbarP() {
 return (
  <section>
   <h2>ToolbarP</h2>
   <div className="Toolbar" onClick={() => {
    alert('You clicked on the toolbar!');
   }}>
    <button onClick={() => alert('Playing!')}>
     Play Movie
    </button>
    <button onClick={() => alert('Uploading!')}>
     Upload Image
    </button>
   </div>
  </section>
 );
}