import type { ConfigData, ConvertedMediaData } from "@/types";
import { deepCamelCaseKeys } from "@/util/deep-camel-case-keys";
import { readFile } from "fs/promises";

export async function loadConfigAsync(filePath: string): Promise<ConfigData> {
  const raw = await readFile(filePath, "utf-8");
  return JSON.parse(raw) as ConfigData;
}

export async function loadConvertedMediaAsync(
  filePath: string,
): Promise<ConvertedMediaData> {
  let raw: string;
  try {
    raw = await readFile(filePath, "utf-8");
  } catch (err) {
    // Decoupled from the Instagram fetch pipeline: when no converted media
    // has been supplied, build with an empty set instead of failing.
    if ((err as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    throw err;
  }
  return deepCamelCaseKeys(JSON.parse(raw)) as ConvertedMediaData;
}
