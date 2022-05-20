import ScrollProducts from '../components/ScrollProduects'
import Trust from '../components/Trust'
import Banner from '../components/Banner'
import ProductCrads from '../components/ProductCrads'
import Icon from '../components/Icon'
import Hero from '../components/Hero'
import BestSeller from '../components/BestSeller'
import Line from '../components/Line'
import Layout from '../components/Layout'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <ProductCrads />
      <ScrollProducts />
      <BestSeller />
      <Trust />
      <Banner />
      <Line />
      <Icon />
    </Layout>
  )
}

export default Home
