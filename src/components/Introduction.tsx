import { Heading, Text, Box } from "@chakra-ui/react";
import React from "react";
import { introData } from "@/data/index";

export const Introduction: React.FC = () => (
  <>
    {introData.map((item) => (
      <Box key={item.title} w="100%">
        <Heading as="h3" textStyle="h3" fontSize="2xl">
          {item.title}
        </Heading>
        <Text mt={4} fontSize="lg">
          {item.text}
        </Text>
      </Box>
    ))}
  </>
);
