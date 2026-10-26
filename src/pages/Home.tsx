import Layout from '../layouts/Layout'
import Hero from '../components/Hero'
import AboutPreview from '../components/AboutPreview'
import FeaturedProjects from '../components/FeaturedProjects'
import NextEvents from '../components/NextEvents'
import Newsletter from '../components/Newsletter'
import SectionDivider from '../components/SectionDivider'
import CorkscrewSection from '../components/CorkscrewSection'
import ScrollReveal from '../components/ScrollReveal'

function Home() {
  return (
    <Layout>
      <Hero />

      <SectionDivider color="#FFFFFF" />

      <ScrollReveal>
        <AboutPreview />
      </ScrollReveal>

      <SectionDivider color="#FFFBFB" direction="up" />

      <CorkscrewSection variant="subtle" className="bg-background">
        <ScrollReveal delay={100}>
          <FeaturedProjects />
        </ScrollReveal>
      </CorkscrewSection>

      <SectionDivider color="#FFFFFF" />

      <ScrollReveal>
        <NextEvents />
      </ScrollReveal>

      <SectionDivider color="#DC2626" />

      <ScrollReveal>
        <Newsletter />
      </ScrollReveal>
    </Layout>
  )
}

export default Home
