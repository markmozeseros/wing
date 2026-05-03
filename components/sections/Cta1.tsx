"use client";
import Link from "next/link";
import { useLanguage } from "@/util/LanguageContext";

export default function Cta1() {
    const { t } = useLanguage();
    return (
        <>
            <section className="box-cta-1 background-100 py-96">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pe-lg-5 wow fadeInUp">
                            <div className="card-video">
                                <div className="card-image">
                                    <img src="/assets/imgs/cta/cta-1/video.png" alt="VING" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-lg-0 mt-4">
                            <span className="btn btn-signin bg-white text-dark mb-4 wow fadeInUp">{t("cta1.badge")}</span>
                            <h4 className="mb-4 neutral-1000 wow fadeInUp">{t("cta1.title")}</h4>
                            <p className="text-lg-medium neutral-500 mb-4 wow fadeInUp">{t("cta1.description")}</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-ticks-green">
                                        <li className="neutral-1000 wow fadeInUp" data-wow-delay="0.1s">
                                            {t("cta1.bullet1")}
                                        </li>
                                        <li className="neutral-1000 wow fadeInUp" data-wow-delay="0.2s">
                                            {t("cta1.bullet2")}
                                        </li>
                                        <li className="neutral-1000 wow fadeInUp" data-wow-delay="0.3s">
                                            {t("cta1.bullet3")}
                                        </li>
                                        <li className="neutral-1000 wow fadeInUp" data-wow-delay="0.4s">
                                            {t("cta1.bullet4")}
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-ticks-green wow fadeInUp">
                                        <li className="neutral-1000 wow fadeInUp" data-wow-delay="0.1s">
                                            {t("cta1.bullet5")}
                                        </li>
                                        <li className="neutral-1000 wow fadeInUp" data-wow-delay="0.2s">
                                            {t("cta1.bullet6")}
                                        </li>
                                        <li className="neutral-1000 wow fadeInUp" data-wow-delay="0.3s">
                                            {t("cta1.bullet7")}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

