import { Language } from "./language.service";

export type LanguageModel = {
  [x in Language]: string;
};