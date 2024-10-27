const LookingContent = () => {
    return (
      <div className="bg-white min-h-screen p-6">
        <div>
          <div className="text-3xl font-bold text-black mb-4">
            WHAT ARE YOU LOOKING FOR?
          </div>
          <div className="flex">
            <div className="bg-[#9999] w-1/2 h-90 mr-4 rounded-2xl flex items-center justify-center text-lg font-bold text-black">
              Big Box
            </div>
  
            <div className="flex flex-col w-1/2 space-y-4">
              <div className="bg-[#9999] h-24 rounded-2xl flex items-center justify-center text-lg font-bold text-black">
                Box 1
              </div>
              <div className="bg-[#9999] h-24 rounded-2xl flex items-center justify-center text-lg font-bold text-black">
                Box 2
              </div>
              <div className="bg-[#9999] h-24 rounded-2xl flex items-center justify-center text-lg font-bold text-black">
                Box 3
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default LookingContent;