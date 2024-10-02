import { useEffect, useState } from "react";

export default function App() {
  const [tip, setTip] = useState("");
  const [contador, setContador] = useState(0);

  async function getTip() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setTip(data.slip.advice);
    setContador((c) => c + 1);
  }

  useEffect(function () {
    getTip();
  }, []);

  return (
    <div>
      <h1>{tip}</h1>
      <button onClick={getTip}>Obtener Tips</button>
      <Mensaje contador={contador} />
    </div>
  );
}

function Mensaje(props) {
  return (
    <p>
      Has leido <strong>{props.contador}</strong> tips hoy!
    </p>
  );
}
