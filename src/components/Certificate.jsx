import React from 'react';

function Certificate({ color, companyname, companylogo, role, links, duration, points }) {
  return (
    <div className="relative h-fit pb-4 md:pb-0 md:h-[630px] lg:h-[664px] xl:h-[630px] bg-[var(--black-primary)] rounded-[10px] overflow-hidden border border-gray-500 flex flex-col items-center">
      <a href={links} target="_blank" rel="noopener noreferrer" className="w-full flex flex-col items-center">
        {/* Color banner */}
        <div 
          style={{ backgroundColor: color }} 
          className="w-full h-[170px]"
        />
        
        {/* Company info section */}
        <div className="absolute top-7 w-full flex flex-col items-center gap-y-7">
          <h3 className="text-2xl font-bold text-white">{companyname}</h3>
          <div 
            style={{ 
              backgroundColor: color,
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
            }} 
            className="rounded-full p-4"
          >
            {companylogo}
          </div>
        </div>

        {/* Content section */}
        <div className="flex flex-col items-center gap-y-3 mt-20 w-full px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[var(--white-secondary)]">{role}</h2>
            <h6 className="text-base font-semibold text-[var(--white-secondary)]">{duration}</h6>
          </div>
          
          <div className="w-full max-w-2xl">
            <ol className="list-disc pl-8">
              {points?.map((point) => (
                <li 
                  key={point.key}
                  className="text-[15.5px] text-[var(--white-primary)] font-medium tracking-wide mb-2"
                >
                  {point.text}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Certificate;