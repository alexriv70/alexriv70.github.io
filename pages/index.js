import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hey, I&apos;m a computer engineer based in the Tri-state area!
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="H2" variant="page-title">
                        Alexander J. Riveron
                    </Heading>
                        <p>Everthing Maker (Computer Software Engineer / Systems Design / 3d Art)</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page
