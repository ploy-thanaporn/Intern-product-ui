import React from "react";

export default function InputBox() {
  return (
    <div>
      <div>
        <h2 className="font-medium text-[#697386]">Email</h2>
        <input
          type="text"
          placeholder="jen@example.com"
          className="placeholder:text-slate-500 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 sm:text-me"
        />
      </div>
      <div className="mt-8">
        <h2 className="font-medium text-[#697386]">Card Information</h2>
        <input
          type="text"
          placeholder="1234 1234 1234 1234"
          className="placeholder:text-slate-500 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 sm:text-me"
          required
        />
      </div>
      <div className="grid grid-cols-2 mt-8">
        <input
          type="date"
          className="placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-l-md py-2 pl-2 pr-3 sm:text-me"
        />
        <input
          type="text"
          placeholder="CVC"
          className="placeholder:text-slate-300 block bg-white w-full border border-slate-300 rounded-r-md py-2 pl-2 pr-3 sm:text-me"
        />
      </div>
    </div>
  );
}
