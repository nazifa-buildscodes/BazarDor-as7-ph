import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { fontFamily: { bangla: ["Noto Sans Bengali","Noto Sans","sans-serif"] }, colors: { bazar: { green: "#079447", deep: "#06763a", pale: "#eef5ef", line: "#dce5de" } }, boxShadow: { soft: "0 8px 30px rgba(17,39,23,.05)" } } }, plugins: [] };
export default config;
