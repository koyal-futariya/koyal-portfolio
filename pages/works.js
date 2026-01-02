import { Container, Heading, SimpleGrid, useColorMode } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'


const Works = () => {
  const { colorMode } = useColorMode()
  return (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="cderp" title="Connecting Dots ERP"  thumbnail={{
              src: "/images/works/cderp.png",
              width: 600,
              height: 300,
              placeholder: 'blur',
              blurDataURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=='
            }}>
           Developed Connecting Dots ERP, an integrated enterprise solution .
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="crit"
            title="Connecting Roots IT"
            thumbnail={{
              src: "/images/works/crit.png",
              width: 600,
              height: 300,
              placeholder: 'blur',
              blurDataURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=='
            }}
          >
            Developed Crit India’s SAP-based ERP solutions
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="atorix"
            title="Atorix IT Solutions"
            thumbnail={{
              src: "/images/works/atorix.png",
              width: 600,
              height: 300,
              placeholder: 'blur',
              blurDataURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=='
            }}
          >
          Atorix IT Solutions delivers SAP consulting and implementation services for business process optimization.
          </WorkGridItem>
        </Section>
       <WorkGridItem
            id="portfolio"
            title="MY Portfolio"
            thumbnail={{
              src: `/images/works/portfolio-${colorMode === 'light' ? 'd' : 'w'}.png`,
              width: 600,
              height: 300,
              placeholder: 'blur',
              blurDataURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=='
            }}
          >
          Atorix IT Solutions delivers SAP consulting and implementation services for business process optimization.
          </WorkGridItem>
      </SimpleGrid>
      
    </Container>
  </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'
