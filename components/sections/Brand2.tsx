
'use client'

import Marquee from 'react-fast-marquee'
import { useLanguage } from '../../util/LanguageContext'

export default function Brand2({ noBg }: any) {
	const { t } = useLanguage()

	return (
		<>

			<div className={`py-96 ${noBg ? '' : ' background-100'}`}>
				<div className="container">
					<div className="box-search-category">
						<h3 className="heading-3 mb-0 neutral-1000 wow fadeInUp">{t('brands.title')}</h3>
						<p className="text-lg-medium neutral-500 wow fadeInUp">{t('brands.subtitle')}</p>
						<Marquee direction='left' pauseOnHover={true} className="carouselTicker carouselTicker-left box-list-brand-car flex-lg-nowrap justify-content-lg-between gap-3 justify-content-center">
							<ul className="carouselTicker__list">
								<li className="carouselTicker__item">
									<div className="item-brand-2">
										<img className="dark-invert" src="/assets/imgs/brand/brand-2/icon-1.png" alt="VING" />
										<span className="text-md-bold mt-2">Opel</span>
										<span className="text-xs-bold neutral-500">180 cars</span>
									</div>
								</li>
								<li className="carouselTicker__item">
									<div className="item-brand-2">
										<img className="dark-invert" src="/assets/imgs/brand/brand-2/icon-2.png" alt="VING" />
										<span className="text-md-bold mt-2">BMV</span>
										<span className="text-xs-bold neutral-500">180 cars</span>
									</div>
								</li>
								<li className="carouselTicker__item">
									<div className="item-brand-2">
										<img className="dark-invert" src="/assets/imgs/brand/brand-2/icon-3.png" alt="VING" />
										<span className="text-md-bold mt-2">Mercedes</span>
										<span className="text-xs-bold neutral-500">180 cars</span>
									</div>
								</li>
								<li className="carouselTicker__item">
									<div className="item-brand-2">
										<img className="dark-invert" src="/assets/imgs/brand/brand-2/icon-4.png" alt="VING" />
										<span className="text-md-bold mt-2">Ford</span>
										<span className="text-xs-bold neutral-500">180 cars</span>
									</div>
								</li>
								<li className="carouselTicker__item">
									<div className="item-brand-2">
										<img className="dark-invert" src="/assets/imgs/brand/brand-2/icon-5.png" alt="VING" />
										<span className="text-md-bold mt-2">Peugeot</span>
										<span className="text-xs-bold neutral-500">180 cars</span>
									</div>
								</li>
								<li className="carouselTicker__item">
									<div className="item-brand-2">
										<img className="dark-invert" src="/assets/imgs/brand/brand-2/icon-6.png" alt="VING" />
										<span className="text-md-bold mt-2">Hyundai</span>
										<span className="text-xs-bold neutral-500">180 cars</span>
									</div>
								</li>
								<li className="carouselTicker__item">
									<div className="item-brand-2">
										<img className="dark-invert" src="/assets/imgs/brand/brand-2/icon-7.png" alt="VING" />
										<span className="text-md-bold mt-2">Toyota</span>
										<span className="text-xs-bold neutral-500">180 cars</span>
									</div>
								</li>
								<li className="carouselTicker__item">
									<div className="item-brand-2">
										<img className="dark-invert" src="/assets/imgs/brand/brand-2/icon-2.png" alt="VING" />
										<span className="text-md-bold mt-2">BMV</span>
										<span className="text-xs-bold neutral-500">180 cars</span>
									</div>
								</li>
								<li className="carouselTicker__item">
									<div className="item-brand-2">
										<img className="dark-invert" src="/assets/imgs/brand/brand-2/icon-3.png" alt="VING" />
										<span className="text-md-bold mt-2">Mercedes</span>
										<span className="text-xs-bold neutral-500">180 cars</span>
									</div>
								</li>
								<li className="carouselTicker__item">
									<div className="item-brand-2">
										<img className="dark-invert" src="/assets/imgs/brand/brand-2/icon-8.png" alt="VING" />
										<span className="text-md-bold mt-2">Nissan</span>
										<span className="text-xs-bold neutral-500">180 cars</span>
									</div>
								</li>
								<li className="carouselTicker__item">
									<div className="item-brand-2">
										<img className="dark-invert" src="/assets/imgs/brand/brand-2/icon-9.png" alt="VING" />
										<span className="text-md-bold mt-2">Mazda</span>
										<span className="text-xs-bold neutral-500">180 cars</span>
									</div>
								</li>
							</ul>
						</Marquee>
					</div>
				</div>
			</div >
		</>
	)
}

