export default function Karves({ karves, perkeltiGyvuli }) {
    return (
        <div className="kvadratai">
            <h2>Karvės</h2>
            <div className="animal-container">
                {karves.map(karve => (
                    <div
                        key={karve.id}
                        className={`animal ${karve.shape} ${karve.side}`}
                        onClick={_ => perkeltiGyvuli(karve.id)}
                    >
                        {karve.id}
                    </div>
                ))}
            </div>
        </div>
    );
}