function CustomRangeSlider({ min, max, onChange, value }) {
  const [minVal, setMinVal] = useState(value.min);
  const [maxVal, setMaxVal] = useState(value.max);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);
  const dropdownStyle = "px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 appearance-none cursor-pointer";

  // Convert to percentage
  const getPercent = (value) => Math.round(((value - min) / (max - min)) * 100);

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="h-6 relative">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        className="thumb thumb--zindex-3 absolute h-0 w-full pointer-events-none appearance-none z-30"
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        className="thumb thumb--zindex-4 absolute h-0 w-full pointer-events-none appearance-none z-40"
      />

      <div className="slider relative w-full h-1 rounded-md bg-gray-300">
        <div ref={range} className="slider__track absolute h-1 bg-blue-500 rounded-md" />
        <div className="slider__left-value absolute text-xs text-gray-600 left-0 mt-4">${minVal}</div>
        <div className="slider__right-value absolute text-xs text-gray-600 right-0 mt-4">${maxVal}</div>
      </div>
    </div>
  );
}