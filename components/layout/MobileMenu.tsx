'use client'
import Link from 'next/link'
import { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useLanguage } from '@/util/LanguageContext'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	const [isAccordion, setIsAccordion] = useState(0)
	const { t } = useLanguage()

	const handleAccordion = (key: any) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>
			<div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${isMobileMenu ? 'sidebar-visible' : ''}`}>
				<PerfectScrollbar className="mobile-header-wrapper-inner">
					<div className="mobile-header-logo">
						<Link className="d-flex" href="/"><img className="light-mode" alt="VING" src="/assets/imgs/template/logo-d.svg" /><img className="dark-mode" alt="VING" src="/assets/imgs/template/logo-w.svg" /></Link>
						<div className="burger-icon burger-icon-white" onClick={handleMobileMenu} />
					</div>
					<div className="mobile-header-content-area">
						<div className="perfect-scroll">
							<div className="mobile-menu-wrap mobile-header-border">
								<nav>
									<ul className="mobile-menu font-heading">
										<li><Link href="/">{t('nav.home')}</Link></li>
										<li><Link href="/cars-list-1">{t('nav.vehicles')}</Link></li>
										<li><Link href="/dealer-details">{t('nav.dealers')}</Link></li>
										<li className={`has-children ${isAccordion === 5 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(5)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="#">{t('nav.pages')}</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 5 ? "block" : "none"}` }}>
												<li><Link href="/about-us">{t('nav.aboutUs')}</Link></li>
												<li><Link href="/services">{t('nav.ourServices')}</Link></li>
												<li><Link href="/faqs">{t('nav.faqs')}</Link></li>
											</ul>
										</li>
										<li><Link href="/contact">{t('nav.contact')}</Link></li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</PerfectScrollbar>
			</div>
			{isMobileMenu && <div className="body-overlay-1" onClick={handleMobileMenu} />			}
		</>
	)
}

