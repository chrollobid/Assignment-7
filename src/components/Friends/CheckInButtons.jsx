"use client";

import { PhoneCall, MessageSquare, Video } from "lucide-react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function CheckInButtons({ friendId, friendName }) {
  const router = useRouter();

  const handleCheckIn = (type) => {
    
    const existing = JSON.parse(localStorage.getItem("timeline") || "[]");

   
    const newEntry = {
      id: Date.now(),
      type,     
      friendName,
      friendId,
      date: new Date().toISOString(),
    };

    localStorage.setItem("timeline", JSON.stringify([newEntry, ...existing]));

    
    toast.success(`${type} with ${friendName} logged!`);
 setTimeout(() => window.dispatchEvent(new Event("storage-update")), 100);
  
  };

  return (
    <div className="grid grid-cols-3 gap-3">
      <button
        onClick={() => handleCheckIn("Call")}
        className="btn btn-ghost bg-gray-50 flex items-center justify-center gap-1"
      >
        <PhoneCall size={16} /> Call
      </button>
      <button
        onClick={() => handleCheckIn("Text")}
        className="btn btn-ghost bg-gray-50 flex items-center justify-center gap-1"
      >
        <MessageSquare size={16} /> Text
      </button>
      <button
        onClick={() => handleCheckIn("Video")}
        className="btn btn-ghost bg-gray-50 flex items-center justify-center gap-1"
      >
        <Video size={16} /> Video
      </button>
    </div>
  );
}