export const Hero = () => {
  return (
    <div className="max-w-full w-full   ">
      <div className="w-full p-0 m-0 h-[90vh] flex justify-between items-center">

{/* text section */}
<div className="w-2/4"></div>

{/* animated cards */}
<div className="w-2/4 h-full flex items-center justify-center overflow-hidden">
    {/* cards container container */}
    <div className="w-full h-[51rem] p-1 flex flex-nowrap justify-between items-center  ">
        {/* animate card 1 */}
        <div className="animate-up w-1/3 h-[3rem]  flex flex-wrap items-center gap-4">
        <img src="https://images.unsplash.com/photo-1715788338483-d991b12a988f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" className="rounded-lg px-0.5" alt="" />
        </div>

    </div>
</div>

      </div>
    </div>
  );
};
