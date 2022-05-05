import { useState } from "react";
function PictureCardComponent(props) {
  const { value } = props;

  const [likeUp, setLikeUp] = useState(value.likeCount);
  const [commentUp, setCommentUp] = useState(value.commentCount);

  const commentData = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      setCommentUp(commentUp + 1);
      alert("ขอบคุณสำหรับ comment");
    }
  };

  const test = () => {
    setLikeUp(likeUp + 1);
  };
  function Display() {
    // console.log(value.id);
    return (
      <div className="items" key={value.id}>
        <img className="pict" src={value.imgSrc} alt={value.id}></img>
        <p>id: {value.id}</p>
        <p>{value.createBy}</p>
        <p>like: {likeUp}</p>
        <p>comment: {commentUp}</p>
        <button onClick={() => setLikeUp(likeUp + 1)}>Like</button>
        <br></br>
        <label>Comment : </label>
        <input type="text" onKeyDown={commentData}></input>
      </div>
    );
  }
  return (
    <div>
      <Display />
    </div>
  );
}

export default PictureCardComponent;
