import './App.css';

function App() {
  // const screenWidth = window.innerWidth;

  // const semiCircleWidth = screenWidth / 5;

  // const borderWidth = 2;

  // const [color, setColor] = useState<"white" | "black">("white");

  // const [xDirection, setXDirection] = useState<"left" | "right" | "none">(
  //   "right"
  // );
  // const [yDirection, setYDirection] = useState<"up" | "down" | "none">("none");

  // const [currentXCoordinate, setCurrentXCoordinate] = useState<number>(0);

  // const [rotation, setRotation] = useState<number>(0);

  // const [clicks, setClicks] = useState<number>(0);

  // useEffect(() => {
  //   const speed = clicks + 2;
  //   const interval = setInterval(() => {
  //     setRotation(rotation + (xDirection === "right" ? speed : -speed));
  //     setCurrentXCoordinate(prevX => {
  //       const maxX = screenWidth - 2 * borderWidth - semiCircleWidth;
  //       let newX = xDirection === "right" ? prevX + speed : prevX - speed;

  //       if (newX >= maxX) {
  //         newX = maxX;
  //         setXDirection("left");
  //       } else if (newX <= 0) {
  //         newX = 0;
  //         setXDirection("right");
  //       }

  //       return newX;
  //     });
  //   }, 10);

  //   return () => clearInterval(interval);
  // }, [xDirection, screenWidth, semiCircleWidth, rotation, clicks]);

  return (
    <>
      {/* <p>{clicks}</p>
      <div
        style={{
          position: "absolute",
          left: currentXCoordinate,
          cursor: "pointer",
          border: `solid white ${borderWidth}px`,
          borderRadius: `${semiCircleWidth}px ${semiCircleWidth}px 0 0`,
          width: `${semiCircleWidth}px`,
          height: `${semiCircleWidth / 2}px`,
          backgroundColor: color,
          rotate: `${rotation}deg`,
        }}
        onClick={() => {
          setClicks(clicks + 1);
          setColor(color === "black" ? "white" : "black");
        }}
      /> */}
    </>
  );
}

export default App;
