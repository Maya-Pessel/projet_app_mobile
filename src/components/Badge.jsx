import {Box, Text} from "native-base";


export default function Badge(props) {

  return (
    <Box bg={"#FFFFFF"} px={2} py={.5} borderRadius={3} {...props}>
      <Text fontSize="18px" textAlign={"center"}>{props.children}</Text>
    </Box>
  );
}


