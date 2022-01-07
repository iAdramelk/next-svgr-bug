import Image from "next/image";
import Icon from "../../icons/alarm.svg?react";
import iconSrc from "../../icons/alarm.svg";

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { path: ["tags", "abc"] },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {},
  };
}


export default function BlogPost({ id }) {
  return (<div>
    <Image src={iconSrc} alt="" />
    <Icon />
  </div>);
}