export default function Karves({ karves, perkeltiGyvuli }) {
  return (
      <div className="karves">
          <h2>Karvės</h2>
          <div className="kvadratai">
          {karves.map(karve => (
              <div key={karve.id} className={`karve ${karve.shape}`} onClick={() => perkeltiGyvuli(karve.id, true)}>
                  {karve.type} {karve.id}
              </div>
          ))}
          </div>
      </div>
  );
}
