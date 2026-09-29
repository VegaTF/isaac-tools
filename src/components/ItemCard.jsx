export function ItemCard({ item }) {
    const { name, type, description, quality, icon } = item

    return(
        <article className="item-card">
            <header className="item-card-header">
                <img src={icon || 'https://via.placeholder.com/64'} alt={`{Icono de ${name}`} className="item-icon"/>
                <h2>{name}</h2>
            </header>
            <div className="item-card-separator"></div>
            <h3>{type}</h3>
            <p>Quality: {quality}</p>
            <div className="item-card-separator"></div>
            <p>{description}</p>
        </article>
    )
}