export default function Signup() {
 return (
  

   <section>
    <h2>Signup</h2>
    <form onSubmit={e => { alert('Submitting!'); }}>
      <input />
      <button>Send</button>
    </form>

    <h2>Signup 2</h2>
    <form onSubmit={e => { e.preventDefault(); alert('Submitting!'); }}>
     <input />
     <button>Send</button>
   </form>
   </section>
 );
}