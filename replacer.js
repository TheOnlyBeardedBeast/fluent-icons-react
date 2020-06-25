const iconFolder = './src/assets/';
const outputFolder = "./src/icons/";

const fs = require('fs');

const icondirectories = fs.readdirSync(iconFolder).map(source => `${iconFolder}${source}/svg/`);

const regularIcons = icondirectories.reduce((acc,dir) =>{
  const file = fs.readdirSync(dir).find(f => f.includes("regular.svg"));

  if(!file){
    return acc;
  }

  return [...acc, dir+file]
},[]);

const filledIcons = icondirectories.reduce((acc,dir) =>{
  const file = fs.readdirSync(dir).find(f => f.includes("filled.svg"));

  if(!file){
    return acc;
  }

  return [...acc, dir+file]
},[]);

function createIcons(icons,type){
  icons.forEach(path => {
    const name = path.split("/")[3].replace(/ /g, '')+type;
  
    const fileContent = fs.readFileSync(path, { encoding: "utf8" })
    .replace(/((<title>)(.*)(<\/title>)|(<\?xml)(.*)(\?>)|(<!--)(.*)(-->)|(<desc>)(.*)(<\/desc>)|(xmlns:xlink="http:\/\/www\.w3\.org\/1999\/xlink"))/g,"")
    .replace(/( width=")(\d*)(px)?(")/," width={size}")
    .replace(/( height=")(\d*)(px)?(")/," height={size}")
    .replace(/("#212121")|("#292929")/g,"{color}");
  
  const content = 
  `
  import * as React from "react";
  import IconProps from "../IconProps";
  
  export const ${name}: React.FC<IconProps> = ({size,color}) => ${fileContent}`
  
  
    fs.writeFileSync(`${outputFolder}${name}.tsx`,content);
  });
}

function getExports(icons,type) {
  return icons.reduce((acc,path) => {
    const name = path.split("/")[3].replace(/ /g, '') + type;
  
    return acc = `${acc}export * from "./icons/${name}";\n`
  },"")
}

createIcons(regularIcons,"Regular");
createIcons(filledIcons,"Filled");

const regularExports = getExports(regularIcons,"Regular");
const filledExports = getExports(filledIcons, "Filled")

fs.writeFileSync("./src/index.ts",regularExports+filledExports);