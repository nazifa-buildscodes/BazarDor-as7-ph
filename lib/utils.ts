import { clsx, type ClassValue } from "clsx";
export function cn(...inputs: ClassValue[]) { return clsx(inputs); }
export const bn = (value: number | string) => String(value).replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[Number(d)]);
export function money(value: number) { return `${bn(Math.round(value))} টাকা`; }
export function pct(value: number) { return `${bn(value.toFixed(1))}%`; }
export function changeLabel(dir: "up"|"down"|"flat", value: number) { return dir === "up" ? `▲ ${pct(value)}` : dir === "down" ? `▼ ${pct(value)}` : `— ${pct(0)}`; }
