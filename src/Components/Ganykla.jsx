import { useState, useEffect } from "react";
import Karves from "./Karves";
import Avys from "./Avys";
import getRandomInt from "../Functions/rand";

export default function Ganykla() {
    const [animals, setAnimals] = useState(JSON.parse(localStorage.getItem("animals")) || []);

    useEffect(_ => {
        localStorage.setItem("animals", JSON.stringify(animals));
    }, [animals]);

    const createAnimals = (letter, type) =>
        Array.from({ length: getRandomInt(5, 20) }, _ => ({
            id: letter + String(getRandomInt(1, 9999999)).padStart(7, "0"),
            shape: type === "Karve" ? "square" : "circle",
            side: type === "Karve" ? "left" : "right",
            type,
        }));

    const addAnimals = _ => {
        const newKarves = createAnimals("K", "Karve");
        const newAvys = createAnimals("A", "Avis");
        setAnimals([...newKarves, ...newAvys]);
    };

    const filterAnimals = _ => {
        setAnimals([]);
    }

    const perkeltiGyvuli = id => {
        setAnimals(prevAnimals => {
            const animal = prevAnimals.find(a => a.id === id);
            if (!animal) return prevAnimals;

            const newSide = animal.side === "left" ? "right" : "left";

            const updatedAnimal = {
                ...animal,
                side: newSide,
            };

            const updatedAnimals = [
                ...prevAnimals.filter(a => a.id !== id),
                updatedAnimal,
            ];

            return updatedAnimals;
        });
    };

    const karves = animals.filter(animal => animal.side === "left");
    const avys = animals.filter(animal => animal.side === "right");

    return (
        <div className="ganykla">
            <button className="green" onClick={addAnimals}>Į ganyklą</button>
            <button className="red" onClick={filterAnimals}>Reset</button>
            <div className="laukas">
                <Karves karves={karves} perkeltiGyvuli={perkeltiGyvuli} />
                <Avys avys={avys} perkeltiGyvuli={perkeltiGyvuli} />
            </div>
        </div>
    );
}