export function ItemCard({ item }) {
    const { id, name, type, description, quality, icon } = item

    return(
        <article className="item-card">
            <header className="item-card-header">
                <h3 className="item-id">#{id}</h3>
                <h3 className="item-quality">Q{quality}</h3>
            </header>

            <div className="item-icon-container">
                <img src={icon} alt={`{Icono de ${name}`} className="item-icon"/>
            </div>
            <main>
                <h2 className="item-name">{name}</h2>
                <div className="item-card-separator"></div>
                <h3 className="item-type">{type ? type.charAt(0).toUpperCase() + type.slice(1) : ''}</h3>
                <div className="item-card-separator"></div>
                <p>{description}</p>
            </main>
        </article>
    )
}