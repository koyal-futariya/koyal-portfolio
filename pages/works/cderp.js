import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Connecting Dots ERP">
    <Container>
      <Title>
        Connecting Dots ERP <Badge>Web Project</Badge>
      </Title>

      <P>
        Worked as a Web Developer on the Connecting Dots ERP website, a platform for SAP, HR, and IT training programs, focusing on building and maintaining responsive, SEO-friendly pages that clearly present course offerings and drive inquiries.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://connectingdotserp.com/" target="_blank">
            https://connectingdotserp.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Role</Meta>
          <span>Web Developer</span>
        </ListItem>

        <ListItem>
          <Meta>Work</Meta>
          <span>
            UI development, page optimization, performance improvements, and integration of forms/lead capture for course enquiries.
          </span>
        </ListItem>

        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js/React, Node.js, HTML/CSS, SEO optimization</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/cderp.png" alt="Connecting Dots ERP website" />
      <WorkImage src="/images/works/cderp1.png" alt="Connecting Dots ERP course pages" />

      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
