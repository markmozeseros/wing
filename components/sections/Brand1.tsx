
'use client'

import Link from "next/link"
import Marquee from 'react-fast-marquee'
import { useLanguage } from '../../util/LanguageContext'

export default function Brand1() {
	const { t } = useLanguage()

	return (
		<>

			<div className="background-100 pb-70">
				<div className="container">
					<div className="box-search-category">
						<h3 className="heading-3 mb-0 neutral-1000 wow fadeInUp">{t('brands.title')}</h3>
						<p className="text-lg-medium neutral-500 wow fadeInUp">{t('brands.subtitle')}</p>
						<Marquee direction='left' pauseOnHover={true} className="carouselTicker carouselTicker-left box-list-brand-car justify-content-center  wow fadeIn">
							<ul className="carouselTicker__list">
								<li className="carouselTicker__item">
									<Link href="/cars-list-2" className="item-brand">
										<img className="light-mode" src="/assets/imgs/page/homepage2/lexus.png" alt="VING" />
										<img className="dark-mode" src="/assets/imgs/page/homepage2/lexus-w.png" alt="VING" />
									</Link>
								</li>
								<li className="carouselTicker__item">
									<Link href="/cars-list-2" className="item-brand">
										<img className="light-mode" src="/assets/imgs/page/homepage2/mer.png" alt="VING" />
										<img className="dark-mode" src="/assets/imgs/page/homepage2/mer-w.png" alt="VING" />
									</Link>
								</li>
								<li className="carouselTicker__item">
									<Link href="/cars-list-2" className="item-brand">
										<img className="light-mode" src="/assets/imgs/page/homepage2/bugatti.png" alt="VING" />
										<img className="dark-mode" src="/assets/imgs/page/homepage2/bugatti-w.png" alt="VING" />
									</Link>
								</li>
								<li className="carouselTicker__item">
									<Link href="/cars-list-2" className="item-brand">
										<img className="light-mode" src="/assets/imgs/page/homepage2/jaguar.png" alt="VING" />
										<img className="dark-mode" src="/assets/imgs/page/homepage2/jaguar-w.png" alt="VING" />
									</Link>
								</li>
								<li className="carouselTicker__item">
									<Link href="/cars-list-2" className="item-brand">
										<img className="light-mode" src="/assets/imgs/page/homepage2/honda.png" alt="VING" />
										<img className="dark-mode" src="/assets/imgs/page/homepage2/honda-w.png" alt="VING" />
									</Link>
								</li>
								<li className="carouselTicker__item">
									<Link href="/cars-list-2" className="item-brand">
										<img className="light-mode" src="/assets/imgs/page/homepage2/chevrolet.png" alt="VING" />
										<img className="dark-mode" src="/assets/imgs/page/homepage2/chevrolet-w.png" alt="VING" />
									</Link>
								</li>
								<li className="carouselTicker__item">
									<Link href="/cars-list-2" className="item-brand">
										<img className="light-mode" src="/assets/imgs/page/homepage2/acura.png" alt="VING" />
										<img className="dark-mode" src="/assets/imgs/page/homepage2/acura-w.png" alt="VING" />
									</Link>
								</li>
								<li className="carouselTicker__item">
									<Link href="/cars-list-2" className="item-brand">
										<img className="light-mode" src="/assets/imgs/page/homepage2/bmw.png" alt="VING" />
										<img className="dark-mode" src="/assets/imgs/page/homepage2/bmw-w.png" alt="VING" />
									</Link>
								</li>
								<li className="carouselTicker__item">
									<Link href="/cars-list-2" className="item-brand">
										<img className="light-mode" src="/assets/imgs/page/homepage2/toyota.png" alt="VING" />
										<img className="dark-mode" src="/assets/imgs/page/homepage2/toyota-w.png" alt="VING" />
									</Link>
								</li>
								<li className="carouselTicker__item">
									<Link href="/cars-list-2" className="item-brand">
										<img className="light-mode" src="/assets/imgs/page/homepage2/lexus.png" alt="VING" />
										<img className="dark-mode" src="/assets/imgs/page/homepage2/lexus-w.png" alt="VING" />
									</Link>
								</li>
								<li className="carouselTicker__item">
									<Link href="/cars-list-2" className="item-brand">
										<img className="light-mode" src="/assets/imgs/page/homepage2/mer.png" alt="VING" />
										<img className="dark-mode" src="/assets/imgs/page/homepage2/mer-w.png" alt="VING" />
									</Link>
								</li>
								<li className="carouselTicker__item">
									<Link href="/cars-list-2" className="item-brand">
										<img className="light-mode" src="/assets/imgs/page/homepage2/bugatti.png" alt="VING" />
										<img className="dark-mode" src="/assets/imgs/page/homepage2/bugatti-w.png" alt="VING" />
									</Link>
								</li>
							</ul>
					</Marquee>
				</div>
			</div>
		</div >
		</>
	)
}

