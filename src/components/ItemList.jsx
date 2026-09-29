import { ItemCard } from './ItemCard'

export function ItemList({ items }) {
  return (
    <section className="item-list-grid">
      {items.map((singleItem) => (
        /* Le pasamos el objeto entero en la prop 'item' */
        <ItemCard key={singleItem.id} item={singleItem} />
      ))}
    </section>
  )
}