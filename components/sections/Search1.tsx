
"use client"

import Link from "next/link"
import HeroSearch from '../elements/HeroSearch'
import { useLanguage } from '@/util/LanguageContext'

export default function Search1() {
	const { t } = useLanguage()
	return (
		<>

			<section className="box-section box-search-advance-home10 background-100">
				<div className="container">
					<div className="box-search-advance background-card wow fadeIn">
						<div className="box-top-search">
							<div className="left-top-search">
								<Link className="category-link text-sm-bold btn-click active" href="#">{t('search1.allCars')}</Link>
								<Link className="category-link text-sm-bold btn-click" href="#">{t('search1.newCars')}</Link>
								<Link className="category-link text-sm-bold btn-click" href="#">{t('search1.usedCars')}</Link>
								<Link className="category-link text-sm-bold btn-click" href="#">{t('search1.otherCategories')}</Link>
							</div>
							<div className="right-top-search d-none d-md-flex">
								<Link className="text-sm-medium need-some-help" href="/contact">{t('search1.needHelp')}</Link>
							</div>
						</div>
						<HeroSearch />
					</div>
				</div>
			</section>
		</>
	)
}
