import type { ConfigData, ConvertedMediaData } from "@/types";
import { deepCamelCaseKeys } from "@/util/deep-camel-case-keys";
import path from "path";

export { data };
export type Data = Awaited<ReturnType<typeof data>>;

const dataPath = path.resolve(import.meta.env.DATA_PATH ?? "data");
const configPath = `${dataPath}/config.json`;
const convertedMediaPath = `${dataPath}/converted_media.json`;
// TODO make public path dynamic for dev purposes
// const publicPath = path.resolve(import.meta.env.PUBLIC_PATH ?? "public");

// Dynamic data loading functions (for client-side updates)
const loadConfigAsync = async (
  path: string = configPath,
): Promise<ConfigData> => {
  const response = await import(/* @vite-ignore */ path, {
    assert: { type: "json" },
  });

  return response.default;
};

export const loadConvertedMediaAsync = async (
  path: string = convertedMediaPath,
): Promise<ConvertedMediaData> => {
  const response = await import(/* @vite-ignore */ path, {
    assert: { type: "json" },
  });

  return deepCamelCaseKeys(response.default);
};

async function data() {
  const config = await loadConfigAsync(configPath);
  const convertedMedia = await loadConvertedMediaAsync(convertedMediaPath);

  return {
    config,
    convertedMedia,
  };
}
