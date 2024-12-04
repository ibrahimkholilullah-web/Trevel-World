import React from "react";
import { GiPassport } from "react-icons/gi";
import { RiPassPendingLine } from "react-icons/ri";
import { SiWorldhealthorganization } from "react-icons/si";
 

const ExtraSectionOne = () => {
  return (
    <div className="md:h-[500px] flex items-center justify-center bg-slate-50">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-8">
      <div className="border rounded-xl bg-[#F3F4F6] p-10">
           <h1 className="bg-[#83CD20] text-white h-24 w-24 flex items-center justify-center rounded-full">
             <SiWorldhealthorganization size={50} />
           </h1>
           <p className="text-2xl my-2 font-bold text-[#034833]">Food and Wine Tours</p>
           <p className="text-[#034833]">
             "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac."
           </p>
         </div>

        <div className="border rounded-xl p-5 bg-[#F3F4F6]">
            <h1 className="bg-[#83CD20] text-white w-24 h-24 flex justify-center items-center  rounded-full  ">< GiPassport
            size={50} />   </h1>
            <p className="text-2xl my-2 font-bold text-[#034833]">Travel Opportunities</p>
            <p className="text-[#034833]">"Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac."</p>
        </div>
        <div className="border rounded-xl bg-[#F3F4F6] p-5">
            <h1 className="bg-[#83CD20] text-white  w-24 h-24 flex items-center rounded-full justify-center  "><RiPassPendingLine
            size={50} className="mx-auto" />   </h1>
            <p className="text-2xl my-2 font-bold text-[#034833]">Solo Travel Planning</p>
            <p className="text-[#034833]">"Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac."</p>
        </div>
      </div>
    </div>
  );
};

export default ExtraSectionOne;
