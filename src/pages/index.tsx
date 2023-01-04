import {
  Box,
  Divider,
  Heading,
  IconButton,
  useColorMode,
  VStack,
} from "@chakra-ui/react";

import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { Footer } from "@/components/Footer";
import { HeadlineArea } from "@/components/HeadlineArea";
import { Introduction } from "@/components/Introduction";
import { Profile } from "@/components/Profile";
import { WorkList } from "@/components/WorkList";
import { flashAnimation } from "@/styles/animation";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box as="section" textAlign="center" position="relative">
        <Box
          position="absolute"
          display={{ base: "none", sm: "block" }}
          left={0}
        >
          <IconButton
            aria-label="DarkMode Switch"
            icon={colorMode === "light" ? <BsMoonFill /> : <BsSunFill />}
            onClick={toggleColorMode}
          />
        </Box>
        <Heading
          as="h1"
          textStyle="h1"
          fontFamily={"'Oxanium',cursive;"}
          fontSize="3xl"
          _before={{
            content: `"$"`,
            color: "org.purple",
            pr: "4",
          }}
          _after={{
            content: `"_"`,
            pl: "2",
            animation: flashAnimation,
          }}
          role="heading"
        >
          RM Portfolio
        </Heading>
      </Box>
      <Box textAlign="center" mt={12}>
        <Profile />
      </Box>
      <VStack as="section" align="flex-start">
        <Box mt={12}>
          <HeadlineArea
            heading="About"
            description={
              <>
                こんにちは！はじめまして、三木と申します！名古屋に在住してます🏠
                <br />
                普段はエンジニアとして、SaaSのプロダクトの開発を行なっています。
                主な関心、興味はフロントエンドにありますが固執しすぎず、幅広く学習していきたいと思っています📚
              </>
            }
          />
        </Box>
        <Box pl={12} w="100%">
          <VStack mt={12} alignItems="flex-start" spacing={16}>
            <Introduction />
          </VStack>
        </Box>
      </VStack>
      <Divider
        textAlign="center"
        m={"6rem auto 3rem auto"}
        w={40}
        size="md"
        borderColor="org.grey"
      />
      <VStack as="section" alignItems="left" mb={20}>
        <Box mt={12}>
          <HeadlineArea
            heading="Work"
            description={
              <>日々のアウトプットの成果物をここに載せていきます。</>
            }
          />
        </Box>
        <VStack pt="8" spacing={20}>
          <WorkList />
        </VStack>
      </VStack>
      <Footer />
    </>
  );
}
