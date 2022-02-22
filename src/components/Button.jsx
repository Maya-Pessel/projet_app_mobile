import {Button as NBButton, HStack} from "native-base";

export default function Button(props) {

  if (props.secondary)
    return (
      <NBButton
        flex={1}
        borderWidth={1}
        borderColor="black"
        bg="transparent"
        _text={{
          fontSize: 16,
          color: "black",
        }}
        _pressed={{
          bg: "transparent"
        }}
        {...props}
      >
        {props.children}
      </NBButton>

    );
  return (
    <NBButton
      _text={{
        fontSize: 16
      }}
      flex={1}
      {...props}
    >
      {props.children}
    </NBButton>)
}
