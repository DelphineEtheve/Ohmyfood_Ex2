import Link from "next/link";
import styles from "./page.module.css";

export default function RestaurantNotFound() {
  return (
    <section className={styles.page}>
      <p>Erreur 404</p>
      <h1>Restaurant introuvable</h1>
      <p>Ce restaurant n’existe pas ou n’est plus disponible.</p>
      <Link href="/" className={styles.backLink}>
        Retour aux restaurants
      </Link>
    </section>
  );
}
