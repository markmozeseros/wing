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
                                    <img className="light-mode" alt="Carento" src="/assets/imgs/template/logo-d.svg" />
                                    <img className="dark-mode" alt="Carento" src="/assets/imgs/template/logo-w.svg" />
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
                                        <li className="mega-li-small has-children">
                                            <Link href="#">{t('nav.dealers')}</Link>
                                            <div className="mega-menu">
                                                <div className="mega-menu-inner mega-menu-inner-small mega-menu-inner-destinations">
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <Link href="/dealer-listing">{t('nav.dealersListing')}</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/dealer-details">{t('nav.dealerDetails')}</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
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
                                                    <Link href="/calculator">{t('nav.calculator')}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/faqs">{t('nav.faqs')}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/contact">{t('nav.contact')}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/login">{t('nav.login')}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/register">{t('nav.register')}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/404">{t('nav.error404')}</Link>
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
                                    <Link className="btn btn-signin neutral-1000" href="/login">
                                        <svg className="mb-1" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                                            <path d="M1 12C1 12 0 12 0 11C0 10 1 7 6 7C11 7 12 10 12 11C12 12 11 12 11 12H1ZM6 6C6.79565 6 7.55871 5.68393 8.12132 5.12132C8.68393 4.55871 9 3.79565 9 3C9 2.20435 8.68393 1.44129 8.12132 0.87868C7.55871 0.316071 6.79565 0 6 0C5.20435 0 4.44129 0.316071 3.87868 0.87868C3.31607 1.44129 3 2.20435 3 3C3 3.79565 3.31607 4.55871 3.87868 5.12132C4.44129 5.68393 5.20435 6 6 6Z" fill="#101010" />
                                        </svg>
                                        {t('nav.signIn')}
                                    </Link>
                                    <div className="d-none d-xxl-inline-block align-middle mr-15">
                                        <ThemeSwitch />
                                    </div>
                                </div>
                                <div className="burger-icon-2 burger-icon-white" onClick={handleOffcanvas}>
                                    <img src="/assets/imgs/template/icons/menu.svg" alt="Carento" />
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
