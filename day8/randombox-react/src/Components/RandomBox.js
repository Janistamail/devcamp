function RandomBoxComponent() {
  const num = () => {
    let n = Math.floor(Math.random() * (400 - 200) + 200);
    console.log(n);
    return n;
  };
  const color = () => {
    let colors = ["red", "blue", "green", "purple", "pink"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      className="box"
      style={{ width: num(), height: num(), background: color() }}
    >
      Random Box
    </div>
  );
}

export default RandomBoxComponent;
