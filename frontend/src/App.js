import { Box, Image, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ShowAds from "./Components/ShowAds";

const getData = async (query) => {
  let res = await fetch(`http://localhost:8080/ads?q=${query}`);
  res = await res.json();
  return res.data;
};

function App() {
  const [ads, setAds] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getData(query).then((res) => {
      console.log(res);
      setAds(res);
    });
  }, [query]);

  return (
    <div>
      <Box>
        <Input
          type="text"
          placeholder={"Search Ads Here..."}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Box>

      <Box>
        <Box display={"grid"} gridTemplateColumns={"repeat(1,1fr)"}>
          {ads.map((el) => {
            return (
              <Box key={el._id}>
                <Image
                  objectFit={"cover"}
                  height={"500px"}
                  width={"600px"}
                  src={el.imageUrl}
                  alt={el.companyName}
                />
                <Text fontSize={"xl"}>{el.companyName}</Text>
                <Text fontSize={"xl"}>{el.primaryText}</Text>
                <Text fontSize={"xl"}>{el.headline}</Text>
                <Text fontSize={"xl"}>{el.description}</Text>
              </Box>
            );
          })}
        </Box>
      </Box>
    </div>
  );
}

export default App;
//http://localhost:8080/ads
