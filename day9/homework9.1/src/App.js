import "./App.css";
import PictureCardComponent from "./Components/PictureCard";

function App() {
  const picture = [
    {
      id: 1,
      imgSrc: "https://picsum.photos/500/500",
      createBy: "createBy: 1",
      likeCount: 11,
      commentCount: 111,
    },
    {
      id: 2,
      imgSrc: "https://picsum.photos/450/300",
      createBy: "createBy: 2",
      likeCount: 22,
      commentCount: 222,
    },
    {
      id: 3,
      imgSrc: "https://picsum.photos/300/400",
      createBy: "createBy: 3",
      likeCount: 33,
      commentCount: 333,
    },
    {
      id: 4,
      imgSrc: "https://picsum.photos/300/500",
      createBy: "createBy: 4",
      likeCount: 44,
      commentCount: 444,
    },
  ];

  const myFunc = picture.map((x) => {
    return <PictureCardComponent value={x} key={x.id} />;
  });
  // console.log(picture, "myFunc", myFunc);
  return <div className="App">{myFunc}</div>;
}

export default App;
