"use client";
import Link from "next/link";
import { useLanguage } from "@/util/LanguageContext";

export default function CarReview1() {
    const { t } = useLanguage();
    return (
        <>
            <section className="section-box box-picked background-body pt-96">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-md-9 mb-30 wow fadeInUp">
                            <h3 className="neutral-1000">{t("carReview1.title")}</h3>
                            <p className="text-lg-medium neutral-500">{t("carReview1.subtitle")}</p>
                        </div>

                    </div>
                    <div className="box-videos-small mt-0">
                        <div className="bg-video background-2" />
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="card-grid-video wow fadeIn">
                                    <div className="card-image">
                                        <img className="mr-10" src="/assets/imgs/car-review/car-review-1/img-video-1.png" alt="VING" />
                                    </div>
                                    <div className="card-info">
                                        <p className="text-md-medium text-white">{t("carReview1.news1Brand")}</p>
                                        <h4 className="text-white">
                                            <Link href="https://www.toyotanews.eu/hu/hibrid-hu/3739-item-kibovuelt-kenyelmi-funkciokkal-es-meg-tovabbfejlesztett-rendszerekkel-ujul-meg-a-toyota-prius-2025-ben" target="_blank" rel="noopener noreferrer" className="text-white">
                                                {t("carReview1.news1Title")}
                                            </Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="list-videos-small">
                                    <div className="item-video-small wow fadeIn" data-wow-delay="0.1s">
                                        <div className="item-image">
                                            <img className="mr-10" src="/assets/imgs/car-review/car-review-1/img-video-2.png" alt="VING" />
                                        </div>
                                        <div className="item-info">
                                            <p className="text-md-medium neutral-500">{t("carReview1.news2Brand")}</p>
                                            <Link className="heading-6" href="https://www.ford.hu/aruszallitok-pickupok/uj-ranger/phev" target="_blank" rel="noopener noreferrer">
                                                {t("carReview1.news2Title")}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="item-video-small wow fadeIn" data-wow-delay="0.2s">
                                        <div className="item-image">
                                            <img className="mr-10" src="/assets/imgs/car-review/car-review-1/img-video-3.png" alt="VING" />
                                        </div>
                                        <div className="item-info">
                                            <p className="text-md-medium neutral-500">{t("carReview1.news3Brand")}</p>
                                            <Link className="heading-6" href="https://www.bmwblog.com/2026/05/03/bmw-7-series-bulletproof-new-version/" target="_blank" rel="noopener noreferrer">
                                                {t("carReview1.news3Title")}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="item-video-small wow fadeIn" data-wow-delay="0.3s">
                                        <div className="item-image">
                                            <img className="mr-10" src="/assets/imgs/car-review/car-review-1/img-video-4.png" alt="VING" />
                                        </div>
                                        <div className="item-info">
                                            <p className="text-md-medium neutral-500">{t("carReview1.news4Brand")}</p>
                                            <Link className="heading-6" href="https://media.audiusa.com/releases/677" target="_blank" rel="noopener noreferrer">
                                                {t("carReview1.news4Title")}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

