"use client";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/util/LanguageContext";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
export default function AboutUs() {
    const { t } = useLanguage();
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <Layout footerStyle={1}>
                <div>
                    <div className="page-header pt-30 background-body">
                        <div className="custom-container position-relative mx-auto">
                            <div className="bg-overlay rounded-12 overflow-hidden">
                                <img className="w-100 h-100 img-banner" src="/assets/imgs/page-header/banner.png" alt="VING" />
                            </div>
                            <div className="container position-absolute z-1 top-50 start-50 translate-middle">
                                <h2 className="text-white">{t('aboutPage.headerTitle')}</h2>
                                <span className="text-white text-xl-medium">{t('aboutPage.headerSubtitle')}</span>
                            </div>
                            <div className="background-body position-absolute z-1 top-100 start-50 translate-middle px-3 py-2 rounded-12 border d-flex gap-3 @@navigation-page">
                                <Link href="/" className="neutral-700 text-md-medium">
                                    Home
                                </Link>
                                <span>
                                    <img src="/assets/imgs/template/icons/arrow-right.svg" alt="VING" />
                                </span>
                                <Link href="#" className="neutral-1000 text-md-bold">
                                    {t('aboutPage.headerTitle')}
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* section-1 */}
                    <section className="section-1 py-96 background-body">
                        <div className="container">
                            <div className="row pb-50">
                                <div className="col-lg-4">
                                    <h3 className="neutral-1000">{t('aboutPage.heroTitle')}</h3>
                                </div>
                                <div className="col-lg-7 offset-lg-1">
                                    <p className="text-lg-medium neutral-500">{t('aboutPage.intro1')}</p>
                                    <p className="text-lg-medium neutral-500 mt-3">{t('aboutPage.intro2')}</p>
                                </div>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6">
                                    <div className="box-image rounded-12 position-relative overflow-hidden">
                                        <img className="rounded-12" src="/assets/imgs/section-1/img-1.png" alt="VING" />
                                        <div className="box-tag bg-white p-3 d-flex position-absolute bottom-0 end-0 rounded-12 m-3">
                                            <span className="text-dark fs-72 me-3">86</span>
                                            <h6>
                                                Industry <br />
                                                Experts
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="box-image rounded-12 position-relative overflow-hidden">
                                        <img className="rounded-12" src="/assets/imgs/section-1/img-2.png" alt="VING" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="d-flex flex-column gap-4 align-self-stretch h-100">
                                        <div className="box-tag background-brand-2 p-5 d-flex rounded-12">
                                            <h4>{t('aboutPage.experience')}</h4>
                                        </div>
                                        <img className="rounded-12" src="/assets/imgs/section-1/img-3.png" alt="VING" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* team 1 */}
                    <section className="section-team-1 py-96 background-body border-top border-bottom">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-xl-6 col-lg-7 col-md-9 col-sm-11">
                                    <div className="text-center mb-5">
                                        <span className="text-xl-medium neutral-500">{t('aboutPage.teamBadge')}</span>
                                        <h3 className="section-title neutral-1000">{t('aboutPage.teamTitle')}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-50">
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="card-news background-card hover-up shadow-2 mb-4 mb-lg-0">
                                        <div className="card-image">
                                            <Link href="/dealer-details">
                                                <img src="/assets/imgs/team/team-1/portrait-1.png" alt="VING" />
                                            </Link>
                                        </div>
                                        <div className="card-info p-4">
                                            <div className="card-title">
                                                <Link className="text-xl-bold neutral-1000" href="/dealer-details">
                                                    <h6>Mózes-Erős Márk</h6>
                                                </Link>
                                                <span className="text-sm-medium neutral-500">Business Development manager (HUN)</span>
                                            </div>
                                            <div className="card-program">
                                                <div className="endtime">
                                                    <div className="card-author d-flex align-items-center gap-2">
                                                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                                                            <img className="m-0" src="/assets/imgs/team/team-1/icon-1.svg" alt="VING" />
                                                        </Link>
                                                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                                                            <img className="m-0" src="/assets/imgs/team/team-1/icon-2.svg" alt="VING" />
                                                        </Link>
                                                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                                                            <img className="m-0" src="/assets/imgs/team/team-1/icon-3.svg" alt="VING" />
                                                        </Link>
                                                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                                                            <img className="m-0" src="/assets/imgs/team/team-1/icon-4.svg" alt="VING" />
                                                        </Link>
                                                    </div>
                                                    <Link href="/dealer-details" className="rounded-circle background-100 icon-shape icon icon-sm hover-up border icon-shape-arrow">
                                                        <img className="m-0" src="/assets/imgs/team/team-1/arrow-up-right.svg" alt="VING" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="card-news background-card hover-up shadow-2 mb-4 mb-lg-0">
                                        <div className="card-image">
                                            <Link href="/dealer-details">
                                                <img src="/assets/imgs/team/team-1/portrait-2.png" alt="VING" />
                                            </Link>
                                        </div>
                                        <div className="card-info p-4">
                                            <div className="card-title">
                                                <Link className="text-xl-bold neutral-1000" href="/dealer-details">
                                                    <h6>Pierre Pieroth</h6>
                                                </Link>
                                                <span className="text-sm-medium neutral-500">Business Development manager (DE)</span>
                                            </div>
                                            <div className="card-program">
                                                <div className="endtime">
                                                    <div className="card-author d-flex align-items-center gap-2">
                                                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                                                            <img className="m-0" src="/assets/imgs/team/team-1/icon-1.svg" alt="VING" />
                                                        </Link>
                                                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                                                            <img className="m-0" src="/assets/imgs/team/team-1/icon-2.svg" alt="VING" />
                                                        </Link>
                                                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                                                            <img className="m-0" src="/assets/imgs/team/team-1/icon-3.svg" alt="VING" />
                                                        </Link>
                                                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                                                            <img className="m-0" src="/assets/imgs/team/team-1/icon-4.svg" alt="VING" />
                                                        </Link>
                                                    </div>
                                                    <Link href="/dealer-details" className="rounded-circle background-100 icon-shape icon icon-sm hover-up border icon-shape-arrow">
                                                        <img className="m-0" src="/assets/imgs/team/team-1/arrow-up-right.svg" alt="VING" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="card-news background-card hover-up shadow-2 mb-4 mb-lg-0">
                                        <div className="card-image">
                                            <Link href="/dealer-details">
                                                <img src="/assets/imgs/team/team-1/portrait-3.png" alt="VING" />
                                            </Link>
                                        </div>
                                        <div className="card-info p-4">
                                            <div className="card-title">
                                                <Link className="text-xl-bold neutral-1000" href="/dealer-details">
                                                    <h6>Benedek István</h6>
                                                </Link>
                                                <span className="text-sm-medium neutral-500">Business Development manager (AT)</span>
                                            </div>
                                            <div className="card-program">
                                                <div className="endtime">
                                                    <div className="card-author d-flex align-items-center gap-2">
                                                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                                                            <img className="m-0" src="/assets/imgs/team/team-1/icon-1.svg" alt="VING" />
                                                        </Link>
                                                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                                                            <img className="m-0" src="/assets/imgs/team/team-1/icon-2.svg" alt="VING" />
                                                        </Link>
                                                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                                                            <img className="m-0" src="/assets/imgs/team/team-1/icon-3.svg" alt="VING" />
                                                        </Link>
                                                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                                                            <img className="m-0" src="/assets/imgs/team/team-1/icon-4.svg" alt="VING" />
                                                        </Link>
                                                    </div>
                                                    <Link href="/dealer-details" className="rounded-circle background-100 icon-shape icon icon-sm hover-up border icon-shape-arrow">
                                                        <img className="m-0" src="/assets/imgs/team/team-1/arrow-up-right.svg" alt="VING" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* cta 9*/}
                    <section className="section-cta-7 background-body py-96">
                        <div className="box-cta-6">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="card-image d-inline-block position-relative mb-100">
                                            <img className="rounded-12" src="/assets/imgs/cta/cta-9/img-1.png" alt="VING" />
                                            <a className="btn btn-play popup-youtube position-absolute top-50 start-50 translate-middle" onClick={() => setOpen(true)} />
                                            <img className="position-absolute top-100 start-100 translate-middle rounded-12 d-none d-md-block" src="/assets/imgs/cta/cta-9/img-2.png" alt="VING" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 ps-lg-5">
                                        <Link className="btn btn-signin bg-2 text-dark mb-4" href="#">
                                            {t('aboutPage.commitmentBadge')}
                                        </Link>
                                        <h4 className="mb-4 neutral-1000">{t('aboutPage.commitmentTitle')}</h4>
                                        <p className="text-lg-medium neutral-500 mb-4">{t('aboutPage.commitmentDesc')}</p>
                                        <div className="row">
                                            <div className="col">
                                                <ul className="list-ticks-green list-ticks-green-2">
                                                    <li className="neutral-1000 pe-0">{t('aboutPage.commitmentItem1')}</li>
                                                    <li className="neutral-1000 pe-0">{t('aboutPage.commitmentItem2')}</li>
                                                    <li className="neutral-1000 pe-0">{t('aboutPage.commitmentItem3')}</li>
                                                    <li className="neutral-1000 pe-0">{t('aboutPage.commitmentItem4')}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <Link className="btn btn-primary mt-2" href="#">
                                            {t('aboutPage.commitmentButton')}
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 15L15 8L8 1M15 8L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-overlay position-absolute bottom-0 end-0 h-75 background-brand-2 opacity-25 z-0 rounded-start-pill" />
                        </div>
                    </section>

                    {/* blog-1 */}
                    <ModalVideo channel="youtube" isOpen={isOpen} videoId="AOg61RB75Ho" onClose={() => setOpen(false)} />
                </div>
            </Layout>
        </>
    );
}

