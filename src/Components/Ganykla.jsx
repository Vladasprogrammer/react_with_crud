import Karves from "./Karves";
import Avys from "./Avys";
import { useState, useEffect } from "react";
import "../crud.scss";

export default function Ganykla() {
  const [karves, setKarves] = useState([]);
  const [avys, setAvys] = useState([]);

  // 🔹 Kai atidarome puslapį, užkrauname iš localStorage
  useEffect(() => {
    setKarves(JSON.parse(localStorage.getItem("karves")) || []);
    setAvys(JSON.parse(localStorage.getItem("avys")) || []);
  }, []);

  // 🔹 Išsaugome pokyčius localStorage
  useEffect(() => {
    localStorage.setItem("karves", JSON.stringify(karves));
    localStorage.setItem("avys", JSON.stringify(avys));
  }, [karves, avys]);

  // 🔹 Sugeneruoja naujas karves ir avis
  const addAnimals = () => {
    const generateId = (prefix) => prefix + Math.floor(1000000 + Math.random() * 9000000);
    const newKarves = Array.from({ length: Math.floor(5 + Math.random() * 16) }, () => ({ id: generateId("K") }));
    const newAvys = Array.from({ length: Math.floor(5 + Math.random() * 16) }, () => ({ id: generateId("A") }));

    setKarves([...karves, ...newKarves]);
    setAvys([...avys, ...newAvys]);
  };
console.log(karves);
  // 🔹 Funkcija, kuri perkelia gyvulį į priešingą pusę
  const perkeltiGyvuli = (id, isKarve) => {
    if (isKarve) {
      // 🔸 Randame karvę, ištriname ją iš sąrašo ir pridedame į avių sąrašą
      const karve = karves.find(k => k.id === id);
      setKarves(karves.filter(k => k.id !== id));
      setAvys([...avys, karve]);
    } else {
      // 🔸 Randame avį, ištriname ją iš sąrašo ir pridedame į karvių sąrašą
      const avis = avys.find(a => a.id === id);
      setAvys(avys.filter(a => a.id !== id));
      setKarves([...karves, avis]);
    }
  };

  return (
    <div className="ganykla">
      <button className="green"onClick={addAnimals}>Į ganyklą</button>
      <div className="laukas">
        <Karves karves={karves} perkeltiGyvuli={perkeltiGyvuli} />
        <Avys avys={avys} perkeltiGyvuli={perkeltiGyvuli} />
      </div>
    </div>
  );
}
