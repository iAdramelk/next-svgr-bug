import Image from "next/image";
import Icon from "../icons/alarm.svg?react";
import iconSrc from "../icons/alarm.svg";

export default function Home() {
  return (
    <>
      <Image src={iconSrc} alt="" />
      <Icon />
    </>
  )
}
