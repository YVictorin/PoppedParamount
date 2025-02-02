import FilterCategory from "./FilterCategory";

export default function SidebarFilter({ setTypeFilter, isMobile }) {
  const handleTypeFilterChange = (selectedTypes) => {
    setTypeFilter(selectedTypes); // whether the user clicked sweet, savory, etc, is passed to parent component's state for re-rendering
  };

  return (
    <div
      className={`mr-6 whitespace-nowrap border-gray-300 h-full ${
        isMobile ? "translate-x-[-50%] translate-y-[18rem]" : "border-r-2"
      }`}
    >
      <span className="text-lg mb-8 inline-block font-semibold text-gray-400">Filter by</span>
      <FilterCategory
        title="Flavor Type"
        options={["sweet", "savory", "spicy"]}
        onFilterChange={handleTypeFilterChange}
      />
    </div>
  );
}
