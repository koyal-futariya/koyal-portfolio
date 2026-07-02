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
  <Layout title="Brain Tumor Detection Using Explainable AI">
    <Container>
      <Title>
        Brain Tumor Detection Using Explainable AI <Badge>2026</Badge>
      </Title>

      <P>
        Developed a CNN-based brain tumor detection system using VGG16 with transfer learning for MRI image classification.
      </P>
      <P>
        The system achieved high classification accuracy (~80%+) on medical imaging datasets and implemented Explainable AI techniques (Grad-CAM, LIME) to visualize tumor regions and improve model interpretability.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://brain-tumor-detection-1.vercel.app" target="_blank">
            https://brain-tumor-detection-1.vercel.app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Role</Meta>
          <span>Researcher, Model Developer</span>
        </ListItem>

        <ListItem>
          <Meta>Work</Meta>
          <span>
            Developed a CNN-based brain tumor detection model with Explainable AI techniques.
          </span>
        </ListItem>

        <ListItem>
          <Meta>Domain</Meta>
          <span>Computer vision, Deep learning, Brain tumor detection, Explainable AI</span>
        </ListItem>

        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span> Python, Flask, React.js, Tailwind CSS, OpenCV, TensorFlow, PyTorch</span>
        </ListItem>
      </List>

      {/* Optional: if you want to keep an embed, replace Vimeo with a company/YouTube video link (if available) */}
      <Box display="none" />

      {/* Replace images with your actual Atorix screenshots */}
      <WorkImage src="/images/works/brain.png" alt="Brain Tumor Detection website" />
      <WorkImage src="/images/works/brain1.png" alt="Atorix services pages" />
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
