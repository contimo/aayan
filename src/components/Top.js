import { Button } from "@chakra-ui/button"
import { Box, Heading, Text } from "@chakra-ui/layout"
import React from "react"

function Top() {
  return (
    <Box bg="black" h="100vh" d="flex" flexDir={["column", "row"]}>
      <Box
        h={["60%", "100%"]}
        w={["100%", "50%"]}
        d="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box d="flex" justifyContent="center" flexDir="column" h="100%" w="90%">
          <Heading color="white" mb="15">
            "Obtinuit Autem Diligunt te Spread”
          </Heading>
          <Heading color="#ffc107">Spread the love you got.</Heading>
          <Text mt="5" color="white">
            We’ve been a student for almost a decade now, and in that time We’ve
            been able to work with a number of different student-run
            non-profits, from a student-led sustainability organization at our
            university to a national organization promoting healthy living.
          </Text>
          <a href="https://www.instagram.com/fundzilla.event/">
            <Button isFullWidth="true" colorScheme="linkedin" mt="15">
              Follow US
            </Button>
          </a>
        </Box>
      </Box>
      <Box
        h={["40%", "100%"]}
        w={["100%", "50%"]}
        bgRepeat="no-repeat"
        bgPos="bottom"
        bgImg={
          "https://ik.imagekit.io/0yt8rbpxzju/Rishika/baby2_evmiKklFbGC.png?updatedAt=1632994453132"
        }
      ></Box>
    </Box>
  )
}

export default Top
