import Icon from "../icons/alarm.svg?react";
import iconSrc from "../icons/alarm.svg";

export async function getStaticPaths() {
  return { paths: [
    { params: { id: ['1'] } }
  ], fallback: false };
}

export async function getStaticProps({ params }) {
  return {
    props: params,
  };
}

export default function BlogPost({ id }) {
  return (<div>
    <img src={iconSrc} alt="" />
    <Icon />
  </div>);
}