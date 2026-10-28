import { GenerativeLanguageClient } from "@google/genai";


const GEMINI_API_KEY = "AIzaSyDc1UVFbsn-atLS1i3adXwKS2iLfAD8HN0";

if (!GEMINI_API_KEY)
  throw new Error("Missing GEMINI_API_KEY");
  
export const geminiClient = new GenerativeLanguageClient({
  apiKey: GEMINI_API_KEY,
});
