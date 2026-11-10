"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./RestaurantCard.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular} from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";




function RestaurantCard ({name, location, image,isNew, slug}){
    
    
    const [isLiked, setIsLiked] = useState(false);
    function handleLike() {
        setIsLiked(!isLiked);
    }

    return(
        <article className={styles.restaurantCard}>
            <div className={styles.imageContainer}>
                <Image className={styles.restaurantImage}
                    src={image}
                    alt={`Plat servi au restaurant ${name}`}
                    width={346}
                    height={231}
                /> 
                {isNew &&<span className={styles.badge}>Nouveau</span> }
            </div>
            <div className={styles.restaurantInfo}>
                <div className={styles.restaurantTexte}>
                    <h3><Link href={`/restaurant/${slug}`} className={styles.menuLink} aria-label={`Voir le menu de ${name}`}>{name}</Link></h3>
                    <p>{location}</p>
                </div>
                <button 
                    type="button"
                    className={styles.favoriteButton} 
                    aria-label={isLiked ? "Retirer des favoris" : "Ajouter aux favoris"}
                    aria-pressed={isLiked}
                    onClick={handleLike}
                >
                    <FontAwesomeIcon 
                        icon={isLiked ? faHeartSolid:faHeartRegular}
                        className={`${styles.heartIcon} ${isLiked ? styles.heartLiked : ""}`}
                    />
                     
                </button>
            </div>
        </article>
    )
}

export default RestaurantCard
