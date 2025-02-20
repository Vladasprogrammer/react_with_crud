export default function Avys({ avys, perkeltiGyvuli }) {
    return (
        <div className="apksritimai">
            <h2>Avys</h2>
            <div className="animal-container">
                {avys.map(avis => (
                    <div
                        key={avis.id}
                        className={`animal ${avis.shape} ${avis.side}`}
                        onClick={_ => perkeltiGyvuli(avis.id)}
                    >
                        {avis.id}
                    </div>
                ))}
            </div>
        </div>
    );
}