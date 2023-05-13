import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const ShowAds = ({
  companyName,
  primaryText,
  headline,
  description,
  CTA,
  imageUrl,
}) => {
  return (
    <Flex
      border={"1px solid RGB(230 226 226)"}
      borderRadius={"8px"}
      alignItems={"center"}
      padding={"20px"}
      _hover={{ backgroundColor: "RGB(239 238 239)" }}
      flexDirection={["column","column","row"]}
    >
      <Box w={["100%","100%","50%"]}>
        <Image
          borderRadius={"8px"}
          width={"320px"}
          src={imageUrl}
          alt={companyName}
        />
      </Box>
      <Box w={["100%","100%","50%"]}>
        <Text fontSize={"3xl"} fontWeight={"semibold"}>
          {companyName}{" "}
          <Badge fontSize="0.4em" colorScheme="green">
            {CTA}
          </Badge>
        </Text>
        <Text as="i" fontSize={"1xl"} color={"gray"}>
          {primaryText}
        </Text>
        <Text fontSize={"2xl"}>{headline}</Text>
        <Text fontSize={"1xl"} color={"gray"}>
          {description}
        </Text>
      </Box>
    </Flex>
  );
};

export default ShowAds;
