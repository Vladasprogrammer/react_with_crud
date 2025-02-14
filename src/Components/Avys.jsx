import React from "react";

export default function Avys({ avys, perkeltiGyvuli }) {
  return (
    <div className="aviu-puse">
      <h2>Avys</h2>
      {avys.map((avis) => (
        <div key={avis.id} className="avis" onClick={() => perkeltiGyvuli(avis.id)}>{avis.id}</div>
      ))}
    </div>
  );
}
