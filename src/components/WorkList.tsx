import {
  Card,
  CardBody,
  Heading,
  Stack,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import React from "react";

export const worksData = [
  {
    title: "〇〇くん！ここのバグ修正しといて！と言われた時にやること",
    img: "https://pbs.twimg.com/card_img/1598963036911415298/beMK_p2E?format=png&name=small",
    link: "https://zenn.dev/rm/articles/ba59cf35f9656d",
  },
  {
    title: "Next.js + Chakra UIでポートフォリオサイトを作った",
    img: "https://pbs.twimg.com/card_img/1596790969625559040/A0KcCH90?format=png&name=small",
    link: "https://zenn.dev/rm/articles/898991947184cf",
  },
];

export const ProjectList: React.FC = () => (
  <>
    {worksData.map((item) => (
      <>
        <Link target="_blank" href={item.link}>
          <Card
            key={item.title}
            bg="transparent"
            border="none"
            boxShadow="none"
          >
            <CardBody>
              <Image borderRadius={6} src={item.img} alt="Zennの記事" />
              <Stack mt="6">
                <Heading size="md">{item.title}</Heading>
                {/* <Text color={"white"}>{item.text}</Text> */}
              </Stack>
            </CardBody>
          </Card>
        </Link>
      </>
    ))}
  </>
);
