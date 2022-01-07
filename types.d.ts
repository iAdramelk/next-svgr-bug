declare module "*.svg" {
  const value: string;

  export default value;
}

declare module "*.svg?react" {
  const Component: React.StatelessComponent<React.SVGAttributes<SVGElement>>;

  export default Component;
}
