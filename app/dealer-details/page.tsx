'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useLanguage } from "@/util/LanguageContext"

export default function DealerDetails() {
	const { t } = useLanguage()

	return (
		<>
			<Layout footerStyle={1}>
				<div>
					<div className="page-header pt-30 background-body">
						<div className="custom-container position-relative mx-auto">
							<div className="bg-overlay rounded-12 overflow-hidden">
								<img className="w-100 h-100 img-banner" src="/assets/imgs/page-header/banner8.png" alt="VING" />
							</div>
							<div className="container position-absolute z-1 top-50 start-50 translate-middle">
								<h2 className="text-white">VING Point Budaörs</h2>
								<span className="text-white text-xl-medium">+36 70 802 5000</span>
							</div>
							<div className="background-body position-absolute z-1 top-100 start-50 translate-middle px-3 py-2 rounded-12 border d-flex gap-3 d-none">
								<Link href="/" className="neutral-700 text-md-medium">Home</Link>
								<span>
									<img src="/assets/imgs/template/icons/arrow-right.svg" alt="VING" />
								</span>
								<Link href="#" className="neutral-1000 text-md-bold" />
							</div>
						</div>
					</div>

					<section className="box-section box-content-tour-detail box-content-room-detail background-body border-bottom">
						<div className="container">
							<div className="row">
								<div className="col-lg-8">
									<div className="box-collapse-expand">
										<div className="group-collapse-expand">
											<button className="btn btn-collapse" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOverview" aria-expanded="false" aria-controls="collapseOverview">
												<h6>{t('dealerDetails.overviewTitle')}</h6>
												<svg width={12} height={7} viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</button>
											<div className="collapse show" id="collapseOverview">
												<div className="card-contact border-0 border-bottom rounded-0 d-flex">
													<div className="card-image me-3">
														<div className="position-relative">
															<img src="/assets/imgs/dealer/dealer-listing/icon-9.svg" alt="VING" />
														</div>
													</div>
													<div className="card-info">
														<div className="card-title">
															<Link className="title heading-6" href="#">VING Point Budaörs</Link>
															<p className="text-md-medium neutral-500">{t('dealerDetails.address')}</p>
														</div>
														<div className="card-method-contact2">
															<Link className="email text-xs-bold" href="#">{t('dealerDetails.carsCount')}</Link>
														</div>
													</div>
												</div>
												<div className="card card-body">
													<p>{t('dealerDetails.desc1')}</p>
													<p>{t('dealerDetails.desc2')}</p>
													<p>{t('dealerDetails.desc3')}</p>
													<p>{t('dealerDetails.desc4')}</p>
													<p>{t('dealerDetails.desc5')}</p>
													<div className="row g-3 mt-1">
														<div className="col-md-6">
															<img className="rounded-1" src="/assets/imgs/dealer/dealer-details/img-1.png" alt="VING" />
														</div>
														<div className="col-md-6 d-flex align-items-center justify-content-between flex-column gap-3">
															<img className="rounded-1" src="/assets/imgs/dealer/dealer-details/img-2.png" alt="VING" />
															<img className="rounded-1" src="/assets/imgs/dealer/dealer-details/img-3.png" alt="VING" />
														</div>
													</div>
												</div>
											</div>
										</div>

										<div className="group-collapse-expand mb-0">
											<button className="btn btn-collapse" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHighlight" aria-expanded="false" aria-controls="collapseHighlight">
												<h6>{t('dealerDetails.servicesTitle')}</h6>
												<svg width={12} height={7} viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</button>
											<div className="collapse show" id="collapseHighlight">
												<div className="card card-body">
													<ul className="list-checked-green-2">
														<li>{t('dealerDetails.svc1')}</li>
														<li>{t('dealerDetails.svc2')}</li>
														<li>{t('dealerDetails.svc3')}</li>
														<li>{t('dealerDetails.svc4')}</li>
														<li>{t('dealerDetails.svc5')}</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="col-lg-4">
									<div className="sidebar-left border-1 background-card">
										<h6 className="text-xl-bold neutral-1000">{t('dealerDetails.getInTouch')}</h6>
										<div className="box-sidebar-content">
											<form className="form-contact">
												<div className="row">
													<div className="col-lg-12">
														<div className="form-group">
															<input className="form-control username" type="text" placeholder={t('dealerDetails.namePlaceholder')} />
														</div>
													</div>
													<div className="col-lg-12">
														<div className="form-group">
															<input className="form-control email" type="email" placeholder={t('dealerDetails.emailPlaceholder')} />
														</div>
													</div>
													<div className="col-lg-12">
														<div className="form-group">
															<textarea className="form-control message" rows={6} placeholder={t('dealerDetails.messagePlaceholder')} />
														</div>
													</div>
													<div className="col-lg-12">
														<button className="btn btn-book">
															{t('dealerDetails.sendMessage')}
															<svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.5 15L15.5 8L8.5 1M15.5 8L1.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</button>
													</div>
												</div>
											</form>
											<div className="box-info-contact pt-4">
												<p className="text-md-medium mobile-phone neutral-1000"><span className="text-md-bold">{t('dealerDetails.mobile')}:</span> +36 70 802 5000</p>
												<p className="text-md-medium email neutral-1000"><span className="text-md-bold">Email:</span> hun.operation@ving.eu</p>
											</div>
										</div>
									</div>
									<div className="sidebar-banner">
										<div className="p-4 background-body border rounded-3">
											<p className="text-xl-bold neutral-1000 mb-4">{t('dealerDetails.dealerLocation')}</p>
											<div className="box-collapse scrollFilter mb-15">
												<div className="pt-0">
													<div className="box-map-small">
														<iframe src="https://www.google.com/maps?q=Auchan%20parkol%C3%B3%2C%20Buda%C3%B6rs%2C%202040&output=embed" width="100%" height={160} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
													</div>
												</div>
											</div>
											<p className="text-sm-medium neutral-1000">{t('dealerDetails.address')}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</Layout>
		</>
	)
}
