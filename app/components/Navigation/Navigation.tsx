import Link from 'next/link'
import styles from './Navigation.module.css'

export default function Navigation() {
    return(
        <>
            <nav className={styles.nav}>
                <div className="container">
                    <ul className={styles.menu}>
                        <li>
                            <Link href="/">Acceuil</Link>
                        </li>
                        <li>
                            <Link href="/products/list">Produits</Link>
                            <ul>
                                <li>
                                    <Link href="/products/add">Ajouter</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
