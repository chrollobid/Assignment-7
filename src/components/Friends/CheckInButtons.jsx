"use client";

import { PhoneCall, MessageSquare, Video } from "lucide-react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const CheckInButtons = ({ friendName, friendId }) => {
  const router = useRouter();

  const handleCheckIn = async (type) => {
   const existing = JSON.parse(localStorage.getItem("timeline") || "[]");
const newEntry = {
  id: Date.now(),
  type,
  friendName,
  friendId,
  date: new Date().toISOString(),
};
localStorage.setItem("timeline", JSON.stringify([newEntry, ...existing]));

    toast.success(`${type} logged with ${friendName}!`, {
      duration: 2000,
      position: "bottom-center",
      style: {
        background: "#1e293b",
        color: "#fff",
        borderRadius: "12px",
        fontSize: "14px",
      },
    });

  
  };

  return (
    <>
      <Toaster />
      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={() => handleCheckIn("Call")}
          className="btn btn-ghost bg-gray-50 flex items-center justify-center gap-2"
        >
          <PhoneCall size={16} /> Call
        </button>
        <button
          onClick={() => handleCheckIn("Text")}
          className="btn btn-ghost bg-gray-50 flex items-center justify-center gap-2"
        >
          <MessageSquare size={16} /> Text
        </button>
        <button
          onClick={() => handleCheckIn("Video")}
          className="btn btn-ghost bg-gray-50 flex items-center justify-center gap-2"
        >
          <Video size={16} /> Video
        </button>
      </div>
    </>
  );
};

export default CheckInButtons;