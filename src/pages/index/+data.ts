import { loadConfigAsync, loadConvertedMediaAsync } from "@/util/load-data";
import path from "path";

export { data };
export type Data = Awaited<ReturnType<typeof data>>;

const dataPath = path.resolve(import.meta.env.DATA_PATH ?? "data");
const configPath = `${dataPath}/config.json`;
const convertedMediaPath = `${dataPath}/converted_media.json`;

async function data() {
  const config = await loadConfigAsync(configPath);
  const convertedMedia = await loadConvertedMediaAsync(convertedMediaPath);

  return {
    config,
    convertedMedia,
  };
}
