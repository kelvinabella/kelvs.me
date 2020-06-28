declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.ico" {
  const value: any;
  export default value;
}

declare module "*.ttf";

declare module "remark-html";
