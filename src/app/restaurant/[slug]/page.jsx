import Image from "next/image";
import { notFound } from "next/navigation";
import RestaurantHeader from "@/components/RestaurantHeader/RestaurantHeader";
import MenuItem from "@/components/MenuItem/MenuItem";
import data from "@/data/restaurants.json";
import styles from "./page.module.css";

export default async function RestaurantPage({ params }) {
  const { slug } = await params;
  const restaurant = data.restaurants.find((restaurant) => restaurant.slug === slug);

  if (!restaurant) {
    notFound();
  }

  return (
    <article>
      <div className={styles.hero}>
        <Image src={restaurant.image} alt={`Restaurant ${restaurant.name}`} fill priority sizes="100vw" className={styles.image} />
      </div>
      <div className={styles.menuPanel}>
        <RestaurantHeader key={slug} name={restaurant.name} />
        <div className={styles.menuContent}>
          {Object.entries(restaurant.menu).map(([category, items]) => (
            <section key={category} aria-labelledby={`menu-${category}`} className={styles.category}>
              <h2 id={`menu-${category}`} className="sectionTitle">{category}</h2>
              {items.map((item, index) => <MenuItem key={item.nom} item={item} index={index} />)}
            </section>
          ))}
          <button type="button" className="orderButton" disabled title="La commande sera disponible ultérieurement">Commander</button>
        </div>
      </div>
    </article>
  );
}
