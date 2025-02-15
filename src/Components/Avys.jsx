export default function Avys({ avys, perkeltiGyvuli }) {
  return (
      <div className="avys">
          <h2>Avys</h2>
          <div className="apskritimai">
          {avys.map(avis => (
              <div key={avis.id} className={`avis ${avis.shape}`} onClick={_ => perkeltiGyvuli(avis.id, false)}>
                  {avis.type} {avis.id}
              </div>
          ))}
          </div>
      </div>
  );
}
