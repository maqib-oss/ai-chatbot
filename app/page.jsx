// "use client";
// import { useState } from "react";
// import ChatMessage from "@/components/ChatMessage";

// export default function ChatPage() {
//   const [messages, setMessages] = useState<{role:string; content:string;}[]>([]);
//   const [prompt, setPrompt] = useState("");
//   const [loading, setLoading] = useState(false);

//   const send = async () => {
//     if (!prompt) return;
//     setLoading(true);
//     const user = { role: "user", content: prompt };
//     setMessages([...messages, user]);
//     setPrompt("");

//     const res = await fetch("/api/chat", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ messages: [...messages, user] }),
//     });
//     const { reply, error } = await res.json();
//     setMessages((prev) => [...prev, { role: error ? "assistant" : "assistant", content: error || reply }]);
//     setLoading(false);
//   };

//   return (
//     <div>
//       <div>
//         {messages.map((m, i) => <ChatMessage key={i} msg={m} />)}
//       </div>
//       <input
//         value={prompt}
//         onChange={(e) => setPrompt(e.target.value)}
//         onKeyDown={(e) => e.key === "Enter" && send()}
//         disabled={loading}
//       />
//       <button onClick={send} disabled={loading || !prompt}>
//         {loading ? "Thinking..." : "Send"}
//       </button>
//     </div>
//   );
// }

import React from 'react'

const page = () => {
  return (
    <div className='bg-red-500'>page</div>
  )
}

export default page;