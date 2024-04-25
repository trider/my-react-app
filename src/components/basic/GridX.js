const square = (val) => { 
 return <button className="square">{val}</button>;
}


const GridX = () => {
 return  <div style={{alignContent:'center'}}>
 <div className="board-row">
   {square(0)}
   {square(1)}
   {square(2)}
 </div>
 <div className="board-row">
   {square(3)}
   {square(4)}
   {square(5)}
 </div>
 <div className="board-row">
   {square(6)}
   {square(7)}
   {square(8)}
 </div>
</div>
}

export default GridX;