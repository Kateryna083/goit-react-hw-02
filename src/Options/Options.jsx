import { useState } from "react";

// export default function Options() {
//     const resetClicks = () => { };
//   return (
//     <div>
//       <button>Good</button>
//       <button>Neutral</button>
//       <button>Bad</button>
//       <button onClick={resetClicks}>Reset</button>
//     </div>
//   );
// }

export default function Options() {
  const [clicks, setClicks] = useState(0);

  const updateClicks = () => {
    setClicks(clicks + 1);
  };
  return <button onClick={updateClicks}> {clicks}</button>;
}
