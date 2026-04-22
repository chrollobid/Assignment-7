import Image from 'next/image';


const FriendCard = ({friend}) => {
   const { name, days_since_contact, status, picture, tags, bio } = friend;
    return (
        <div className="card bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    
      <figure className="px-4 pt-4">
        <Image 
          src={picture} 
          alt={name}
          width={200}
          height={200} 
          className="rounded-xl h-48 w-full object-cover" 
        />
      </figure>

      <div className="card-body">
        <div className="flex justify-between items-start">
          <h2 className="card-title text-slate-800">{name}</h2>
        
        </div>
      
        <p className="text-xs font-semibold text-slate-400 mt-2">
          Last contact: {days_since_contact} days ago
        </p>

        <div className="card-actions justify-center mt-4">
          
          {tags.map((tag, index) => (
            <div key={index} className="py-2 rounded-2xl px-2 font-semibold bg-green-300 text-[10px]">
              {tag}
            </div>
          ))}
        </div>
          <div className={`px-4 py-1.5 mx-auto rounded-full w-6/12 mt-2 text-xs font-medium ${
        status === "on-track" 
          ? "bg-[#1A4332] text-white" 
          : status === "overdue" 
            ? "bg-[#FF5252] text-white" 
            : "bg-[#FFB74D] text-white"
      }`}>
            {status}
          </div>
      </div>
    </div>
    );
};

export default FriendCard;