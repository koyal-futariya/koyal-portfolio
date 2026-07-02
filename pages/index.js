import NextLink from 'next/link'
import {
  Heading,
  Box,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioTimeline } from '../components/bio'
import { Skills } from '../components/skills'
import TechStack from '../components/tech-stack'
import { Projects } from '../components/projects'
import { Experience } from '../components/experience'
import { Education } from '../components/education'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import GithubContributions from '../components/GithubContributions'
import Image from 'next/image'

const Home = () => (
  <Layout>
   
      <Box
        borderRadius="lg"
        mb={1}
        mt={2}
        p={3}
        maxW="container.sm"
        mx="auto"
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
        lineHeight="shorter"
        fontWeight="semibold"
      >
          Building scalable software that solves real-world problems.
        </Box>

      <Box display={{ md: 'flex' }} w="full">
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Koyal Futariya
          </Heading>
          <b >Software Engineer | Full-Stack Developer</b> <br />
          <p  lineHeight="1.3">Building scalable, secure, and high-performance web applications using React, Next.js, Node.js, Express.js, MongoDB, and JavaScript.</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="140px"
            h="140px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/Koyal.jpeg"
              alt="Profile image"
              width="140"
              height="140"
            />
          </Box>
        </Box>
      </Box>
      

      <Section delay={0.1} w="full">
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph fontSize="18px" lineHeight="1.7">
          I am a <b>Software Engineer</b> and <b>Full-Stack Developer</b> passionate about building scalable, secure, and high-performance web applications. I specialize in <b>React, Next.js, Node.js, Express.js, MongoDB,</b> and <b>JavaScript,</b> with a strong focus on writing clean, maintainable, and efficient code.
          <br /><br />
         Through internships and personal projects, I have developed ERP platforms, AI-powered applications, and business websites while gaining hands-on experience in full-stack development. I enjoy solving real-world problems, exploring modern technologies, and continuously improving my software engineering skills.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            View Projects
          </Button>
        </Box>
      </Section>
     
      <Section delay={0.2} w="full">
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioTimeline />
      </Section>
      

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <Skills />
      </Section>

      <Section delay={0.35}>
        <Heading as="h3" variant="section-title" mb={4}>
          Tech Stack
        </Heading>
        <TechStack 
          stack={[
            { name: 'HTML5', color: 'orange', description: 'Markup language for web pages' },
            { name: 'CSS3', color: 'blue', description: 'Stylesheets for web layout and design' },
            { name: 'JavaScript (ES6+)', color: 'yellow', description: 'Core programming language' },
            { name: 'Python', color: 'blue', description: 'High-level programming language' },
            { name: 'C++', color: 'blue', description: 'Systems programming language' },
            { name: 'TypeScript', color: 'blue', description: 'Type-safe JavaScript' },
            { name: 'React.js', color: 'cyan', description: 'Frontend library' },
            { name: 'Next.js', color: 'gray', description: 'React framework' },
            { name: 'Node.js', color: 'green', description: 'Backend runtime' },
            { name: 'Express', color: 'gray', description: 'Node.js framework' },
            { name: 'MongoDB', color: 'green', description: 'NoSQL database' },
            { name: 'Tailwind CSS', color: 'teal', description: 'Utility-first CSS framework' },
            { name: 'Chakra UI', color: 'teal', description: 'Component library' },
            { name: 'Framer Motion', color: 'pink', description: 'Motion/animation library for React' },
            { name: 'Git', color: 'orange', description: 'Version control' },
            { name: 'GitHub', color: 'purple', description: 'Code hosting and version control' },
            { name: 'Vercel', color: 'gray', description: 'Cloud platform for frontend and serverless functions' },
            { name: 'Render', color: 'teal', description: 'Cloud platform for full-stack applications' }
          ]} 
        />
      </Section>
     

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Projects
        </Heading>
        <Projects />
      </Section>

      <Section delay={0.3}>
        <Section delay={0.4}>
      <Heading as="h3" variant="section-title">
        Experience
      </Heading>
      <Experience />
    </Section>
     <Section delay={0.38}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <Education />
      </Section>
     <GithubContributions username="koyal-futariya" />

        <Heading as="h3" variant="section-title" mt={8}>
          Get In Touch
        </Heading>
        <Box mt={4}>
        <p>
          Have a project in mind or want to discuss potential opportunities?{" "}
          I&apos;m always open to new connections and interesting conversations.
        </p>
        </Box>

        <Box align="center" my={4}>
          <Button
            as="a"
            href="mailto:koyalfutariya03@gmail.com"
            leftIcon={<EmailIcon />}
            colorScheme="teal"
            size="lg"
          >
            Contact Me
          </Button>
        </Box>
      </Section>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
