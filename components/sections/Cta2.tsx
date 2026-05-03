'use client'

import CounterUp from '../elements/CounterUp'
import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/util/LanguageContext'

const categoryRevenueMap = {
	optionPassenger: [432000, 480000, 672000, 840000],
	optionSmallVan: [432000, 486000],
	optionStandardVan: [486000, 540000],
	optionLargeVan: [594000, 648000],
} as const

export default function Cta2() {
	const { t } = useLanguage()
	const [selectedCategory, setSelectedCategory] = useState<keyof typeof categoryRevenueMap>('optionPassenger')
	const [priceIndex, setPriceIndex] = useState(0)
	const isPassenger = selectedCategory === 'optionPassenger'
	const maxRangeIndex = isPassenger ? 3 : 1
	const safePriceIndex = Math.min(priceIndex, maxRangeIndex)
	const monthlyRevenue = categoryRevenueMap[selectedCategory][safePriceIndex]
	const formattedRevenue = `${new Intl.NumberFormat('hu-HU').format(monthlyRevenue)} HUF`
	const selectedRangeLabel = isPassenger
		? [t('cta2.rangePassengerBase'), t('cta2.rangePassengerMid'), t('cta2.rangePassengerUpperMid'), t('cta2.rangePassengerHigh')][safePriceIndex]
		: [t('cta2.rangeVanBase'), t('cta2.rangeVanHigh')][safePriceIndex]

	const handleCategoryChange = (nextCategory: keyof typeof categoryRevenueMap) => {
		setSelectedCategory(nextCategory)
		if (nextCategory !== 'optionPassenger' && priceIndex > 1) {
			setPriceIndex(1)
		}
	}

	return (
		<>

			<section className="box-cta-2 background-body overflow-hidden">
				<div className="bg-shape top-50 start-50 translate-middle" />
				<div className="container position-relative z-1">
					<div className="row ">
						<div className="col-lg-5 pe-lg-5 ">
							<h3 className="text-white wow fadeInDown">{t('cta2.title')}</h3>
							<p className="text-lg-medium text-white wow fadeInUp">{t('cta2.description')}</p>
						</div>
						<div className="col-lg-6 offset-lg-1">
							<div className="mb-30 background-card p-md-5 p-4 rounded-3 mt-lg-0 mt-30 wow fadeIn">
								<h5 className="neutral-1000 mb-2">{t('cta2.calcTitle')}</h5>
								<p className="text-sm-medium neutral-500 mb-25">{t('cta2.calcDesc')}</p>
								<div className="form-contact">
									<div className="row">
										<div className="col-lg-12">
											<div className="form-group">
												<label className="text-sm-medium neutral-1000">{t('cta2.categoryLabel')}</label>
												<select className="form-control form-select" value={selectedCategory} onChange={(event) => handleCategoryChange(event.target.value as keyof typeof categoryRevenueMap)}>
													<option value="optionPassenger">{t('cta2.optionPassenger')}</option>
													<option value="optionSmallVan">{t('cta2.optionSmallVan')}</option>
													<option value="optionStandardVan">{t('cta2.optionStandardVan')}</option>
													<option value="optionLargeVan">{t('cta2.optionLargeVan')}</option>
												</select>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group">
												<label className="text-sm-medium neutral-1000">{t('cta2.priceRangeLabel')}</label>
												<input
													className="form-range cta2-range"
													type="range"
													min={0}
													max={maxRangeIndex}
													step={1}
													value={safePriceIndex}
													onChange={(event) => setPriceIndex(Number(event.target.value))}
												/>
												<div className="d-flex justify-content-between align-items-center mt-2">
													<span className="text-xs-medium neutral-500">{isPassenger ? t('cta2.rangePassengerBase') : t('cta2.rangeVanBase')}</span>
													{isPassenger && <span className="text-xs-medium neutral-500">{t('cta2.rangePassengerMid')}</span>}
													{isPassenger && <span className="text-xs-medium neutral-500">{t('cta2.rangePassengerUpperMid')}</span>}
													<span className="text-xs-medium neutral-500">{isPassenger ? t('cta2.rangePassengerHigh') : t('cta2.rangeVanHigh')}</span>
												</div>
												<p className="text-sm-bold neutral-1000 mt-2 mb-0">{selectedRangeLabel}</p>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="row py-4 align-items-center">
												<div className="col-md-5 col-8 d-flex flex-column gap-1">
													<p className="text-sm-bold neutral-1000">{t('cta2.revenueLabel')}</p>
												</div>
												<div className="col-md-7 col-4 d-flex flex-column gap-1 align-items-end align-items-md-start">
													<p className="text-sm-bold text-primary-dark">{formattedRevenue}</p>
												</div>
											</div>
										</div>
										<div className="col-lg-12">
											<Link className="btn btn-book" href="/contact">
												{t('cta2.contactBtn')}
												<svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M8.5 15L15.5 8L8.5 1M15.5 8L1.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row align-items-center">
						<div className="border-top py-3 mt-3" />
						<div className="col-lg-7 mb-20 wow fadeIn">
							<div className="row">
								<div className="col-md-4 col-6 mb-md-0 mb-4 d-flex flex-column align-items-center align-items-md-start">
									<div className="d-flex justify-content-center justify-content-md-start">
										<h3 className="count text-white"><CounterUp count={3} /></h3>
									</div>
									<div className="position-relative">
										<p className="text-lg-bold text-white">{t('cta2.stat1Label')}</p>
									</div>
								</div>
								<div className="col-md-4 col-6 mb-md-0 mb-4 d-flex flex-column align-items-center align-items-md-start">
									<div className="d-flex justify-content-center justify-content-md-start">
										<h3 className="count text-white"><CounterUp count={10} /></h3>
										<h3 className="text-white">+</h3>
									</div>
									<div className="position-relative">
										<p className="text-lg-bold text-white">{t('cta2.stat2Label1')}</p>
										<p className="text-lg-bold text-white">{t('cta2.stat2Label2')}</p>
									</div>
								</div>
								<div className="col-md-4 col-6 mb-md-0 mb-4 d-flex flex-column align-items-center align-items-md-start">
									<div className="d-flex justify-content-center justify-content-md-start">
										<h3 className="count text-white"><CounterUp count={10} /></h3>
										<h3 className="text-white">K</h3>
									</div>
									<div className="position-relative">
										<p className="text-lg-bold text-white">{t('cta2.stat3Label1')}</p>
										<p className="text-lg-bold text-white">{t('cta2.stat3Label2')}</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 offset-lg-1 wow fadeIn">
							<div className="box-authors-partner background-body wow fadeInUp p-4">
								<div className="authors-partner-left">
									<img src="/assets/imgs/page/homepage5/author.png" alt="VING" /><img src="/assets/imgs/page/homepage5/author2.png" alt="VING" /><img src="/assets/imgs/page/homepage5/author3.png" alt="VING" />
									<span className="item-author">
										<svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect x="0.5" y="7.448" width={17} height="2.31818" fill="black" />
											<rect x="7.84082" y="17.1072" width={17} height="2.31818" transform="rotate(-90 7.84082 17.1072)" fill="black" />
										</svg>
									</span>
								</div>
								<div className="authors-partner-right">
									<p className="text-sm neutral-1000">1684 people used <strong>VING </strong>in the last
										<strong>24 hours</strong></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

