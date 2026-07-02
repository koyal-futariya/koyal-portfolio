import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="CRIT India">
    <Container>
      <Title>
        CRIT India (Connecting Roots IT) <Badge>Web Project</Badge>
      </Title>

      <P>
        Worked as a Web Developer for CRIT India, an SAP consulting and IT services company focused on SAP implementation, integration, support, and digital transformation offerings.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.critindia.com" target="_blank">
            https://www.critindia.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Role</Meta>
          <span>Web Developer</span>
        </ListItem>

        <ListItem>
          <Meta>Work</Meta>
          <span>
            Built and maintained responsive service pages, improved site performance and on-page SEO, and implemented lead-generation contact/consultation flows.
          </span>
        </ListItem>

        <ListItem>
          <Meta>Domain</Meta>
          <span>SAP consulting services (implementation, integration, testing, support, upgrades)</span>
        </ListItem>

        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Next.js, Tailwind CSS, NodeJs, JavaScript, </span>
        </ListItem>
      </List>

      <P>
        Key service areas highlighted on the website include SAP Implementation Services, SAP Integration Services, and SAP Testing Services.
      </P>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/crit.png" alt="CRIT India website" />
        <WorkImage src="/images/works/crit1.png" alt="CRIT India services pages" />
      </SimpleGrid>

      <WorkImage src="/images/works/crit2.png" alt="CRIT India contact page" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
