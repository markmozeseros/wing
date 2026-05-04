import Layout from "@/components/layout/Layout"
import Banners from "@/components/sections/Banners"
import Brand1 from "@/components/sections/Brand1"
import CarReview1 from "@/components/sections/CarReview1"
import CarsListing1 from "@/components/sections/CarsListing1"
import CarsListing2 from "@/components/sections/CarsListing2"
import Categories1 from "@/components/sections/Categories1"
import Cta1 from "@/components/sections/Cta1"
import Cta2 from "@/components/sections/Cta2"
import Cta4 from "@/components/sections/Cta4"
import Hero1 from "@/components/sections/Hero1"
import Search1 from "@/components/sections/Search1"
import Services1 from "@/components/sections/Services1"
import WhyUs1 from "@/components/sections/WhyUs1"

export default function Home() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<Hero1 />
				<Search1 />
				<Brand1 />
				<CarsListing1 />
				<Cta4 />
				<Categories1 />
				<WhyUs1 />
				<Cta2 />
				<CarsListing2 />
				<Cta1 />
				<Services1 />
				<Banners />
				<CarReview1 />
			</Layout>
		</>
	)
}