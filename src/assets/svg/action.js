import * as React from "react"
import Svg, { G, Path, Defs }  from "react-native-svg"


function Like(props) {
  return (
    <Svg
      width={56}
      height={49}
      viewBox="0 0 56 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16.3 2C8.402 2 2 8.402 2 16.3c0 14.3 16.9 27.3 26 30.324C37.1 43.6 54 30.6 54 16.3 54 8.402 47.597 2 39.7 2A14.282 14.282 0 0028 8.076 14.283 14.283 0 0016.3 2z"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

function Dislike(props) {
  return (
    <Svg
      width={57}
      height={50}
      viewBox="0 0 57 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        filter="url(#filter0_b_52_35)"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M16.575 2C8.525 2 2 8.526 2 16.575 2 31.15 19.225 44.4 28.5 47.482 37.775 44.4 55 31.15 55 16.575 55 8.525 48.474 2 40.425 2A14.557 14.557 0 0028.5 8.193 14.558 14.558 0 0016.575 2zM33.8 17.9L23.2 28.5M23.2 17.9l10.6 10.6" />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default {Dislike, Like};