export type Language = "th" | "en"

export const DEFAULT_LANGUAGE: Language = "th"

export const SUPPORTED_LANGUAGES: {
  id: Language
  name: string
  nativeName: string
}[] = [
  {
    id: "th",
    name: "Thai",
    nativeName: "ไทย",
  },
  {
    id: "en",
    name: "English",
    nativeName: "English",
  },
]
