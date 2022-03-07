import {Box, Text} from "native-base";


export default function Badge({children}) {

  return (
    <Box bg={"#FFFFFF"} px={2} py={.5} borderRadius={3}>
      <Text textAlign={"center"}>{children}</Text>
    </Box>
  );
}


