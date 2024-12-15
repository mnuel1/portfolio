import { useState } from 'react';
import { WorkCard } from '../widgets/cards';

import { BiLogoFacebook, BiLogoLinkedin, BiLogoGithub } from 'react-icons/bi';

import '../css/tailwind.css';
import '../css/animation.css';

import { workData } from '../Data/workData';

const Work = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [active, setActive] = useState<string>("all");
  const itemsPerPage = 4;
  
  const filteredItems = workData.filter(item => {
    if (active === "all") {
      return true;
    }
    return item.type === active;
  });
  
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };
  
  const handleFilterChange = (type: string) => {
    setActive(type);
    setCurrentPage(1);  
  };

  return (
    <div className="flex flex-col gap-6 p-6 h-fit max-w-screen-xl">
      <div className="flex justify-between items-center md:items-start flex-col md:flex-row gap-2 md:gap-0">
        <h1 className="text-xl md:text-xl"> Featured Projects </h1>
        <div className="flex items-center text-sm font-bold gap-2">
          <span className="mr-2 hidden md:block">Projects:</span>
          <button
            onClick={() => handleFilterChange("all")}
            className={`${active === "all" ? "text-light" : "text-gray-400"} hover:text-h-light`}
          >
            All
          </button>
          |
          <button
            onClick={() => handleFilterChange("client")}
            className={`${active === "client" ? "text-light" : "text-gray-400"} hover:text-h-light`}
          >
            Client
          </button>
          |
          <button
            onClick={() => handleFilterChange("personal")}
            className={`${active === "personal" ? "text-light" : "text-gray-400"} hover:text-h-light`}
          >
            Personal
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {currentItems.map((items, index) => (
          <a href={items.link} key={index}>
            <WorkCard workCardProps={items} />
          </a>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-3 py-1 mx-1 rounded-full focus:outline-none ${
              currentPage === i + 1 ? 'bg-[#F4ABC4] text-white' : 'bg-[#333456] text-gray-800'
            }`}
          >
           
          </button>
        ))}
      </div>

      <div className="mt-4 row-span-1">
        <div className="bg-[#02020A] flex flex-col justify-center items-center p-2">
          <h5 className="text-center">
            If you have a project in mind and would like me to participate, let's get in touch.
          </h5>
          <div className="flex justify-center items-center gap-2">
            <a
              href="https://www.facebook.com/manuel.marin.37669528"
              className="group p-2 rounded-full transition-colors hover:bg-blue-500 ease-in-out duration-300"
            >
              <BiLogoFacebook className="text-2xl bg-[#02010A] group-hover:bg-blue-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/mnuelrin/"
              className="group p-2 rounded-full transition-colors hover:bg-blue-900 ease-in-out duration-300"
            >
              <BiLogoLinkedin className="text-2xl bg-[#02010A] group-hover:bg-blue-900" />
            </a>
            <a
              href="https://github.com/mnuel1"
              className="group p-2 rounded-full transition-colors hover:bg-gray-800 ease-in-out duration-300"
            >
              <BiLogoGithub className="text-2xl bg-[#02010A] group-hover:bg-gray-800" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
