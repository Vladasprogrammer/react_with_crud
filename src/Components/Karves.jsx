import React from "react";

export default function Karves({ karves, perkeltiGyvuli }) {
  return (
    <div className="karviu-puse">
      <h2>Karvės</h2>
      {karves.map((karve) => (
        <div key={karve.id} className="karve" onClick={() => perkeltiGyvuli(karve.id)}>{karve.id}</div>
      ))}
    </div>
  );
}
