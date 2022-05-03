const picture = [
  { pic: "https://picsum.photos/500/500", date: 1, like: 11, comment: 111 },
  { pic: "https://picsum.photos/450/300", date: 2, like: 22, comment: 222 },
  { pic: "https://picsum.photos/300/400", date: 3, like: 33, comment: 333 },
  { pic: "https://picsum.photos/300/500", date: 4, like: 44, comment: 444 },
];
function CardComponent() {
  const people = picture.map((x, i) => {
    return (
      <div key={`card${i}`} className="item">
        <img className="pict" src={x.pic} alt={x.comment}></img>
        <p>Date: {x.date}</p>
        <p>Like: {x.like}</p>
        <p>Comment: {x.comment}</p>
      </div>
    );
  });
  return <div className="container">{people}</div>;
}

export default CardComponent;
