import { Box, Image, Input, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ShowAds from "./Components/ShowAds";

const getData = async (query) => {
  let res = await fetch(`https://lucky-crab-purse.cyclic.app/ads?q=${query}`);
  res = await res.json();
  return res.data;
};

function App() {
  const [ads, setAds] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let id = setTimeout(() => {
      getData(query).then((res) => {
        console.log(res);
        setAds(res);
        setLoading(false);
      });
    }, 700);

    return () => clearTimeout(id);
  }, [query]);

  return (
    <div>
      <Box textAlign={"center"}>
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Welcome to search MERN app
        </Text>
        <Box padding={"20px"}>
          <Input
            focusBorderColor="pink.200"
            type="text"
            placeholder={"Search Ads Here..."}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Box>
      </Box>

      {loading && (
        <Box textAlign={"center"} alignItems={"center"}>
          <Spinner color="red.500" />
        </Box>
      )}

      {ads.length == 0 && query && (
        <Box alignItems={"center"}>
          <Image
            margin={"auto"}
            src="https://ouch-cdn2.icons8.com/UTcX3k3Uk-tPFoNDPJhaz7V5dSSJ3vL53rKj1uoipdU/rs:fit:256:192/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTY3/L2Q5MDEzYmNmLWEy/NDUtNDNkZC1hZTM3/LTkxMzVmOTM0ZGVk/MC5zdmc.png"
          />
        </Box>
      )}

      <Box>
        <Box
          display={"grid"}
          gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)"]}
          gap={"20px"}
          padding={"20px"}
        >
          {ads.map((el) => {
            return <ShowAds key={el._id} {...el} />;
          })}
        </Box>
      </Box>
    </div>
  );
}

export default App;
