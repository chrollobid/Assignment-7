
import FriendCard from '../FriendCard/FriendCard';

const FriendSection = async() => {
   const data = await fetch('http://localhost:3000/data.json')
    const friends =await data.json();
    const totalFriends = friends.length;
  const onTrackCount = friends.filter(f => f.status === "on-track").length;
  const needAttentionCount = friends.filter(f => f.status === "overdue").length;
const almostDueCount = friends.filter(f => f.status === "almost due").length;
    return (
        <div>
            <div className="grid grid-cols-1 w-10/12 mx-auto mt-10 md:grid-cols-4 gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
  

  <div className="bg-white p-6 rounded-lg shadow-sm text-center border border-gray-100">
    <h2 className="text-3xl font-bold text-slate-800">{totalFriends}</h2>
    <p className="text-sm text-slate-500 font-medium">Total Friends</p>
  </div>

  
  <div className="bg-white p-6 rounded-lg shadow-sm text-center border border-gray-100">
    <h2 className="text-3xl font-bold text-emerald-600">{onTrackCount}</h2>
    <p className="text-sm text-slate-500 font-medium">On Track</p>
  </div>

 
  <div className="bg-white p-6 rounded-lg shadow-sm text-center border border-gray-100">
    <h2 className="text-3xl font-bold text-rose-600">{needAttentionCount}</h2>
    <p className="text-sm text-slate-500 font-medium">Need Attention</p>
  </div>

  
  <div className="bg-white p-6 rounded-lg shadow-sm text-center border border-gray-100">
    <h2 className="text-3xl font-bold text-amber-500">{almostDueCount}</h2>
    <p className="text-sm text-slate-500 font-medium">Almost Due</p>
  </div>

</div>
<div className="w-7/12 mx-auto">
    <h2 className='font-bold text-3xl mt-4'>Your Friends</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 ">
        {
            friends.map((friend) => <FriendCard key={friend.id} friend={friend} ></FriendCard> )
        }
    </div>
</div>


        </div>
    );
};

export default FriendSection;