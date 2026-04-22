
'use client'
import { useLanguage } from '@/util/LanguageContext'

export default function Hero1() {
	const { t } = useLanguage()
	return (
		<>

			<section className="box-section block-banner-home1 position-relative">
				<div className="container position-relative z-1">
					<p className="text-primary text-md-bold wow fadeInUp">{t('hero1.tagline')}</p>
					<h1 className="color-white mb-35 wow fadeInUp">{t('hero1.title')}</h1>
					<ul className="list-ticks-green">
						<li className="wow fadeInUp" data-wow-delay="0.1s">{t('hero1.bullet1')}</li>
						<li className="wow fadeInUp" data-wow-delay="0.2s">{t('hero1.bullet2')}</li>
						<li className="wow fadeInUp" data-wow-delay="0.4s">{t('hero1.bullet3')}</li>
					</ul>
				</div>
				<div className="bg-shape z-0" />
			</section>
		</>
	)
}
