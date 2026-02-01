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
  const raw = await readFile(filePath, "utf-8");
  return deepCamelCaseKeys(JSON.parse(raw)) as ConvertedMediaData;
}
