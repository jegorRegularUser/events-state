import '../../App.css';

function Toolbar({filters,selected, onSelectFilter }) {
    const btns = filters.map((el, index)=>{
        return (
            <button className={el===selected? 'btn styled': 'btn'} onClick={()=>{onSelectFilter(el)}}  key={index}>{el}</button>
        )
    })
  return (
    <div className="tollbar">
    {btns}
    </div>
  );
}

export default Toolbar;
