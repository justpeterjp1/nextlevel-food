
import Link from "next/link";
import logoImg from '@/assets/logo.png'
import classes from './header.module.css'
import Image from "next/image";
import HeaderBackground from "./header-background";
import Navlink from "./nav-link";

export default function Header() {

    return (
        <>
            <HeaderBackground />
        <header className={classes.header}>
            <Link href="/" className={classes.logo}>
            <Image src={logoImg} alt="A plate with food on it" priority />
                NEXTLEVEL FOOD
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li><Navlink href="/meals">Checkout Meals</Navlink></li>
                    <li><Navlink href="/community">Foodies Community</Navlink></li>
                </ul>
            </nav>
        </header>
        </>
    )
}