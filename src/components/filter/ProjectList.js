import "../../App.css";

function ProjectList({ list }) {
  const List = list.map((el, index) => {
    return <img src={el.img} alt="."  key={index} />;
  });
  return <div className="list"> {List} </div>;
}

export default ProjectList;
