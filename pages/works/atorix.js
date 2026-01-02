import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Atorix IT Solutions">
    <Container>
      <Title>
        Atorix IT Solutions <Badge>2015</Badge>
      </Title>

      <P>
        Worked on the Atorix IT Solutions website, an SAP consulting and implementation partner that delivers SAP implementation, support, and integration services for businesses across multiple industries.
      </P>
      <P>
        The site showcases Atorix capabilities such as SAP S/4HANA (ECC 6.0), SAP S/4HANA Cloud, SAP Business One, and consulting services, with a clear “Request a Consultation” lead flow for enquiries.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.atorixit.com" target="_blank">
            https://www.atorixit.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Role</Meta>
          <span>Web Developer</span>
        </ListItem>

        <ListItem>
          <Meta>Work</Meta>
          <span>
            Implemented responsive UI sections, optimized performance and on-page SEO, and integrated contact/consultation forms to improve lead capture.
          </span>
        </ListItem>

        <ListItem>
          <Meta>Domain</Meta>
          <span>SAP consulting, implementation, integration, upgrade, support</span>
        </ListItem>

        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML/CSS, JavaScript, React/Next.js, Tailwind CSS</span>
        </ListItem>
      </List>

      {/* Optional: if you want to keep an embed, replace Vimeo with a company/YouTube video link (if available) */}
      <Box display="none" />

      {/* Replace images with your actual Atorix screenshots */}
      <WorkImage src="/images/works/atorix.png" alt="Atorix IT Solutions website" />
      <WorkImage src="/images/works/atorix1.png" alt="Atorix services pages" />
      <WorkImage src="/images/works/atorix2.png" alt="Atorix contact / consultation page" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
