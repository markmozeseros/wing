'use client'
import { swiperGroup4 } from '@/util/swiperOptions'
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { useLanguage } from '@/util/LanguageContext'

export default function Services1() {
	const { t } = useLanguage()
	return (
		<>

			<section className="section-box box-properties-area pt-96 pb-50 background-body">
				<div className="container">
					<div className="row align-items-end mb-40">
						<div className="col-md-8">
							<h3 className="neutral-1000">{t('services1.title')}</h3>
							<p className="text-lg-medium neutral-500">{t('services1.subtitle')}</p>
						</div>
					</div>
					<div className="box-list-featured">
						<div className="box-swiper mt-0">
							<Swiper {...swiperGroup4} className="swiper-container swiper-group-4 swiper-group-journey">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="card-spot background-card wow fadeInDown">
											<div className="card-image">
												<Link href="/services"><img className="rounded-3" src="/assets/imgs/services/services-1/img-1.png" alt="VING" /></Link>
											</div>
											<div className="card-info background-card">
												<div className="card-left">
													<div className="card-title"><Link className="text-lg-bold neutral-1000" href="/services">Budapest HU</Link></div>
													<div className="card-desc"><Link className="text-sm neutral-500" href="#">2 helyen</Link></div>
												</div>
												<div className="card-right">
													<div className="card-button">
														<Link href="/services">
															<svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-spot background-card wow fadeInDown">
											<div className="card-image">
												<Link href="/services"><img className="rounded-3" src="/assets/imgs/services/services-1/img-2.png" alt="VING" /></Link>
											</div>
											<div className="card-info background-card">
												<div className="card-left">
													<div className="card-title"><Link className="text-lg-bold neutral-1000" href="/services">Bécs AT</Link></div>
													<div className="card-desc"><Link className="text-sm neutral-500" href="#">1 helyen</Link></div>
												</div>
												<div className="card-right">
													<div className="card-button">
														<Link href="/services">
															<svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-spot background-card wow fadeInDown">
											<div className="card-image">
												<Link href="/services"><img className="rounded-3" src="/assets/imgs/services/services-1/img-3.png" alt="VING" /></Link>
											</div>
											<div className="card-info background-card">
												<div className="card-left">
													<div className="card-title"><Link className="text-lg-bold neutral-1000" href="/services">Kerpen DE</Link></div>
													<div className="card-desc"><Link className="text-sm neutral-500" href="#">1 helyen</Link></div>
												</div>
												<div className="card-right">
													<div className="card-button">
														<Link href="/services">
															<svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-spot background-card wow fadeInDown">
											<div className="card-image">
												<Link href="/services"><img className="rounded-3" src="/assets/imgs/services/services-1/img-4.png" alt="VING" /></Link>
											</div>
											<div className="card-info background-card">
												<div className="card-left">
													<div className="card-title"><Link className="text-lg-bold neutral-1000" href="/services">Berlin DE</Link></div>
													<div className="card-desc"><Link className="text-sm neutral-500" href="#">Nemsokára</Link></div>
												</div>
												<div className="card-right">
													<div className="card-button">
														<Link href="/services">
															<svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
								</div>
							</Swiper>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

