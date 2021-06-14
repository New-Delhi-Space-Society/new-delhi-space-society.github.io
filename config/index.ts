const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://new-delhi-space-society.github.io";

export const formUrl =
  "https://script.google.com/macros/s/AKfycbzK-CLh7dx2ufQcbgwVCq4yph8NQgp4hUfzsXPPcxcWrRbLCaw6guTkNouhD9gnFrM4Yw/exec?";

export const nssUrl = "https://space.nss.org";
