
const Navigation = () => {

    return (
        <div className="fixed left-20 top-1/2 transform -translate-y-1/2 w-10 z-50 ">
          <ul className="flex flex-col items-center space-y-24">
            {['Hello', 'Projects', 'Aboutme' ].map((subject, index) => (
              <li key={index} className="relative">
                <span
                  className="text-dark bg-primary hover:bg-h-primary rounded-lg p-2 
                  w-auto h-8 text-center font-semibold shadow-lg transition duration-300 cursor-pointer"
                  title={`Go to ${subject}`}
                >
                  {subject}
                </span>
                {/* Vertical line */}
                {index !== 2 && (
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-[.5px] h-10 bg-gray-200"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      );

}

export default Navigation;