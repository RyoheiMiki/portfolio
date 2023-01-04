import { HStack, Avatar, Box } from "@chakra-ui/react";
import React, { lazy, Suspense, useEffect, useLayoutEffect } from "react";
import { SnsLinks } from "@/components/SnsLinks";

export const Profile: React.FC = () => {
  return (
    <>
      <Box>
        <Avatar w={40} h={40} src="../../images/avatar.png" />
      </Box>
      <HStack spacing={8} justifyContent="center" mt="8">
        <SnsLinks />
      </HStack>
    </>
  );
};
