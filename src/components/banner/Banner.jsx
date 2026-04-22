import React from 'react';

const Banner = () => {
    return (
        <div className='w-7/12 mx-auto text-center mt-20'>
            <h2 className="text-5xl font-bold mb-4">Friends to keep close in your life</h2>
            <p className='text-[#64748B] mb-4 '>Your personal shelf of meaningful connections. Browse, tend, and nurture <br /> the
relationships that matter most.</p>
<button className='btn btn-ghost bg-[#244D3F] text-white font-semibold hover:bg-white hover:text-[#244d3f]'>+  Add a Friend </button>
        </div>
    );
};

export default Banner;