"use client";

import { CalendarCheck, Hotel, MapPinned, Ticket, Van } from "lucide-react";

const SearchBar = () => {
  const filters = [
    {
      title: "tour",
      icon: MapPinned,
    },
    {
      title: "hotel",
      icon: Hotel,
    },
    {
      title: "visa",
      icon: Ticket,
    },
    {
      title: "activities",
      icon: CalendarCheck,
    },
    {
      title: "transport",
      icon: Van,
    },
  ];
  return (
    <div className="hidden md:block w-full max-w-6xl mx-auto">
      <div className="max-w-[70%] mx-auto rounded-t-xl border border-white/70 border-b-0 grid grid-cols-5 ">
        {filters.map((filter) => (
          <div
            key={filter.title}
            className="filter_type flex px-2 py-4 border-r border-white/70 last-of-type:border-r-0 last-of-type:rounded-tr-xl first-of-type:rounded-tl-xl items-center justify-center gap-1 "
          >
            <span>
              <filter.icon size={19} />
            </span>
            <p className="capitalize text-[.85rem] text-white">
              {filter.title}
            </p>
          </div>
        ))}
      </div>
      <div className="filter_options w-full grid grid-cols-9 rounded-4xl pl-7 border border-white/70">
        <div className="flex items-center gap-2 py-3 col-span-2">
          <span>
            <MapPinned size={34} className="text-white" />
          </span>
          <div className="flex flex-col">
            <span className="text-[.75rem] capitalize text-white">
              destination
            </span>
            <select name="destinations" className="text-sm text-white">
              <option value="default" defaultValue={"default"}>
                --select--
              </option>
              <option value="accra">Accra</option>
              <option value="kumasi">Kumasi</option>
              <option value="takoradi">Takoradi</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-2 py-3 col-span-2">
          <span>
            <MapPinned size={34} className="text-white" />
          </span>
          <div className="flex flex-col">
            <span className="text-[.75rem] capitalize text-white">
              destination
            </span>
            <select name="destinations" className="text-sm text-white">
              <option value="default" defaultValue={"default"}>
                --select--
              </option>
              <option value="accra">Accra</option>
              <option value="kumasi">Kumasi</option>
              <option value="takoradi">Takoradi</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-2 py-3 col-span-2">
          <span>
            <MapPinned size={34} className="text-white" />
          </span>
          <div className="flex flex-col">
            <span className="text-[.75rem] capitalize text-white">
              destination
            </span>
            <select name="destinations" className="text-sm text-white">
              <option value="default" defaultValue={"default"}>
                --select--
              </option>
              <option value="accra">Accra</option>
              <option value="kumasi">Kumasi</option>
              <option value="takoradi">Takoradi</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-2 py-3 col-span-2">
          <span>
            <MapPinned size={34} className="text-white" />
          </span>
          <div className="flex flex-col">
            <span className="text-[.75rem] capitalize text-white">
              destination
            </span>
            <select name="destinations" className="text-sm text-white">
              <option value="default" defaultValue={"default"}>
                --select--
              </option>
              <option value="accra">Accra</option>
              <option value="kumasi">Kumasi</option>
              <option value="takoradi">Takoradi</option>
            </select>
          </div>
        </div>
        <button className="bg-white rounded-r-4xl">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
