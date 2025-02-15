import { useState, useEffect } from "react";
import Karves from "./Karves";
import Avys from "./Avys";
import getRandomInt from "../Functions/rand";
import { loadFromStorage, saveToStorage } from "../Functions/local";


export default function Ganykla() {
    const [animals, setAnimals] = useState({ karves: [], avys: [] });

    useEffect(_ => {
        setAnimals({
            karves: loadFromStorage("karves", []),
            avys: loadFromStorage("avys", [])
        });
    }, []);

    useEffect(_ => {
        if (animals.karves.length || animals.avys.length) {
            saveToStorage("karves", animals.karves);
            saveToStorage("avys", animals.avys);
        }
    }, [animals]);

    const addAnimals = () => {
        const createAnimals = (raide, type) =>
            Array.from({ length: getRandomInt(5, 20) }, _ => ({
                id: raide + String(getRandomInt(1, 9999999)).padStart(7, '0'),
                shape: type === "Karve" ? "square" : "circle",
                type,
            }));

        setAnimals({
            karves: [...animals.karves, ...createAnimals("K", "Karve")],
            avys: [...animals.avys, ...createAnimals("A", "Avis")],
        });
    };

    const perkeltiGyvuli = (id, isKarve) => {
        if (isKarve) {
            const karve = animals.karves.find(k => k.id === id);
            if (!karve) return;

            setAnimals({
                karves: animals.karves.filter(k => k.id !== id),
                avys: [...animals.avys, {...karve}]
            });
        } else {
            const avis = animals.avys.find(a => a.id === id);
            if (!avis) return;

            setAnimals({
                karves: [...animals.karves, {...avis}],
                avys: animals.avys.filter(a => a.id !== id)
            });
        }
    };

    return (
        <div className="ganykla">
            <button className="green" onClick={addAnimals}>Į ganyklą</button>
            <div className="laukas">
                <Karves karves={animals.karves} perkeltiGyvuli={perkeltiGyvuli} />
                <Avys avys={animals.avys} perkeltiGyvuli={perkeltiGyvuli} />
            </div>
        </div>
    );
}
