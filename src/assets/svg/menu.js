import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Home = ({color="#fff"}) => (
  <Svg
    width={44}
    height={43}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M15 41.418h14m-14 0h-4.667A9.333 9.333 0 0 1 1 32.085V17.404A9.333 9.333 0 0 1 5.496 9.42l11.667-7.07a9.333 9.333 0 0 1 9.674 0l11.667 7.07A9.334 9.334 0 0 1 43 17.401v14.684a9.333 9.333 0 0 1-9.333 9.333H15Zm0 0v-9.333a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v9.333H15Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)


const Message = ({color="#fff"}) => (
  <Svg
    width={47}
    height={47}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="m14.07 38.393.402-.633a.75.75 0 0 0-.639-.078l.238.711Zm-8.195 2.732-.712-.237a.75.75 0 0 0 .95.949l-.238-.712Zm2.732-8.196.711.238a.75.75 0 0 0-.078-.64l-.633.402ZM23.5 41.875c10.148 0 18.375-8.227 18.375-18.375h-1.5c0 9.32-7.555 16.875-16.875 16.875v1.5Zm-9.831-2.849a18.291 18.291 0 0 0 9.831 2.849v-1.5c-3.322 0-6.418-.96-9.028-2.615l-.803 1.266Zm.164-1.344-8.195 2.731.474 1.424 8.196-2.732-.475-1.423Zm-7.246 3.68 2.731-8.195-1.423-.475-2.732 8.196 1.424.474ZM5.125 23.5c0 3.615 1.045 6.988 2.849 9.831l1.266-.803A16.792 16.792 0 0 1 6.625 23.5h-1.5ZM23.5 5.125c-10.148 0-18.375 8.227-18.375 18.375h1.5c0-9.32 7.555-16.875 16.875-16.875v-1.5ZM41.875 23.5c0-10.148-8.227-18.375-18.375-18.375v1.5c9.32 0 16.875 7.555 16.875 16.875h1.5Z"
      fill={color}
    />
  </Svg>
)

//profile
const Profile = ({color="#fff"}) => (
  <Svg
    width={37}
    height={37}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M18.5 1C8.835 1 1 8.835 1 18.5S8.835 36 18.5 36 36 28.165 36 18.5 28.165 1 18.5 1Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.974 29.605s3.9-4.98 13.526-4.98c9.625 0 13.527 4.98 13.527 4.98M18.5 18.5a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5v0Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)



export default {Home, Message, Profile}
