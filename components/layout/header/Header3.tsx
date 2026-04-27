"use client";
import dynamic from "next/dynamic";
const ThemeSwitch = dynamic(() => import("@/components/elements/ThemeSwitch"), {
    ssr: false,
});
import Link from "next/link";
import { useLanguage } from "@/util/LanguageContext";

export default function Header3({ scroll, isMobileMenu, handleMobileMenu, handleOffcanvas, isOffcanvas }: any) {
    const { t } = useLanguage()
    return (
        <>
            <header className={`header sticky-bar header-home-3 border-0 ${scroll ? "stick" : ""}`}>
                <div className="container-fluid background-body">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link className="d-flex" href="/">
                                    <img className="light-mode" alt="VING" src="/assets/imgs/template/logo-d.svg" />
                                    <img className="dark-mode" alt="VING" src="/assets/imgs/template/logo-w.svg" />
                                </Link>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu">
                                    <ul className="main-menu">
                                        <li>
                                            <Link href="/">{t('nav.home')}</Link>
                                        </li>
                                        <li>
                                            <Link href="/cars-list-1">{t('nav.vehicles')}</Link>
                                        </li>
                                        <li><Link href="/dealer-details">{t('nav.dealers')}</Link></li>
                                        <li className="has-children">
                                            <Link href="#">{t('nav.pages')}</Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link href="/about-us">{t('nav.aboutUs')}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services">{t('nav.ourServices')}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/faqs">{t('nav.faqs')}</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="/contact">{t('nav.contact')}</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="header-right">
                                <div className="d-none d-xxl-inline-block align-middle mr-15">
                                    <ThemeSwitch />
                                </div>
                                <div className="burger-icon-2 burger-icon-white" onClick={handleOffcanvas}>
                                    <img src="/assets/imgs/template/icons/menu.svg" alt="VING" />
                                </div>
                                <div className="burger-icon burger-icon-white" onClick={handleMobileMenu}>
                                    <span className="burger-icon-top" />
                                    <span className="burger-icon-mid"> </span>
                                    <span className="burger-icon-bottom"> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

