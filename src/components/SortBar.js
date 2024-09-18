import { FiGrid, FiList } from 'react-icons/fi';

export default function SortBar({ sort, setSort, view, setView }) {
  const buttonStyle = "px-4 py-2 mx-1 rounded-md text-white font-semibold transition-colors duration-200 flex items-center"; // Ensures flex layout
  const activeButtonStyle = "bg-blue-600 hover:bg-blue-700";
  const inactiveButtonStyle = "bg-gray-400 hover:bg-gray-500";
  const dropdownStyle = "px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 appearance-none cursor-pointer";

  return (
    <div className="flex justify-between items-center my-4">
      <div className="relative">
        <select 
          value={sort} 
          onChange={(e) => setSort(e.target.value)}
          className={`${dropdownStyle} pr-8`}
        >
          <option value="popularity">Popularity</option>
          <option value="trending">Trending</option>
          <option value="recommended">Recommended</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>
      <div className="flex space-x-2"> {/* Ensures buttons are side by side */}
        <button 
          onClick={() => setView('grid')} 
          className={`${buttonStyle} ${view === 'grid' ? activeButtonStyle : inactiveButtonStyle}`}
        >
          <FiGrid className="mr-2" /> {/* Grid icon before text */}
          Grid
        </button>
        <button 
          onClick={() => setView('list')} 
          className={`${buttonStyle} ${view === 'list' ? activeButtonStyle : inactiveButtonStyle}`}
        >
          <FiList className="mr-2" /> {/* List icon before text */}
          List
        </button>
      </div>
    </div>
  );
}
