"use client"; import { useEffect } from "react"; import toast from "react-hot-toast";
export function ProtectedToast({notice}:{notice?:string}){useEffect(()=>{if(notice==='login')toast.error('এই পেজটি দেখতে আগে সাইন ইন করুন।')},[notice]);return null}
