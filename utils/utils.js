import fs from "fs/promises";

export const read = async (filepath) => await fs.readFile(filepath, "utf-8");

export const write = async (filepath, data) => {
  await fs.writeFile(filepath, data);
  console.log(filepath + " written");
};

export const writeJSON = async (filepath, data) => {
  const file = JSON.stringify(data, null, 2);
  await write(filepath, file);
};

export const readJSON = async (filepath) => {
  const file = await read(filepath);
  return JSON.parse(file);
};

export const mkdir = async (path) => fs.mkdir(path, { recursive: true });
