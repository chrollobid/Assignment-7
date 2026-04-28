import CheckInButtons from "@/components/Friends/CheckInButtons";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  PhoneCall,
  MessageSquare,
  Video,

  Archive,
  Trash2,
  Pencil,
  BellOff,
} from "lucide-react";

const PageDetails = async ({ params }) => {
    
    const { friendDetails } = await params;
    
    const res = await fetch("/data.json");
const json = await res.json();
const friends = json.friends; 
const friend = friends.find((f) => f.id === Number(friendDetails));
    
    if (!friend) return notFound();

    
    const {
        id,
        name,
        picture,
        email,
        days_since_contact,
        status,
        tags,
        bio,
        goal,
        next_due_date,
    } = friend;
    const handleTimeline = (id) => {
console.log(id)
    }
    const notify = () => toast(`{name}`);

  const statusStyles = {
    overdue: "bg-red-500 text-white",
    "almost due": "bg-yellow-400 text-white",
    "on-track": "bg-green-500 text-white",
  };

  const tagStyles = {
    FAMILY: "bg-green-100 text-green-700",
    College: "bg-blue-100 text-blue-700",
    Work: "bg-purple-100 text-purple-700",
    Tech: "bg-cyan-100 text-cyan-700",
    Creative: "bg-pink-100 text-pink-700",
    Networking: "bg-orange-100 text-orange-700",
  };

  const formattedDate = new Date(next_due_date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">



       
        <div className="border border-dashed border-blue-300 rounded-2xl p-4 bg-slate-50">
          <div className="flex flex-col md:flex-row gap-4">

        
            <div className="flex flex-col gap-3 w-full md:w-64 shrink-0">

              <div className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col items-center text-center gap-2">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-200">
                  <Image
                    src={picture}
                    alt={name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>

                <h2 className="text-base font-semibold text-slate-800 mt-1">{name}</h2>

           
                <span className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${statusStyles[status] ?? "bg-gray-200 text-gray-600"}`}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </span>

              
                <div className="flex flex-wrap justify-center gap-1">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide ${tagStyles[tag] ?? "bg-slate-100 text-slate-600"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

            
                <p className="text-xs text-slate-500 italic mt-1">"{bio}"</p>

            
                <p className="text-xs text-slate-400">Preferred: email</p>
              </div>

            
              <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
                 <button className="w-full flex items-center justify-center gap-2 py-3 text-sm text-slate-600 hover:bg-slate-50 transition-colors rounded-t-xl">
                  <BellOff size={16} />
                  Snooze 2 Weeks
                </button> 
                <button className="w-full flex items-center justify-center gap-2 py-3 text-sm text-slate-600 hover:bg-slate-50 transition-colors">
                  <Archive size={16} />
                  Archive
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors rounded-b-xl">
                  <Trash2 size={16} />
                  Delete
                </button>
              </div>
            </div>

            
            <div className="flex flex-col gap-3 flex-1">

              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Days Since Contact", value: days_since_contact },
                  { label: "Goal (Days)", value: goal },
                  { label: "Next Due", value: formattedDate },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col items-center justify-center text-center">
                    <span className="text-2xl font-bold text-slate-700">{value}</span>
                    <span className="text-xs text-slate-400 mt-1">{label}</span>
                  </div>
                ))}
              </div>

            
              <div className="bg-white rounded-xl border border-slate-200 p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-slate-700">Relationship Goal</h3>
                  <button className="text-xs border border-slate-300 rounded px-3 py-1 text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-1">
                    <Pencil size={12} />
                    Edit
                  </button>
                </div>
                <p className="text-sm text-slate-600">
                  Connect every <strong>{goal} days</strong>
                </p>
              </div>

             
           <div className="bg-white rounded-xl border border-slate-200 p-5">
  <h3 className="text-sm font-semibold text-slate-700 mb-3">Quick Check-In</h3>
  <CheckInButtons friendName={name} friendId={id} />
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageDetails;