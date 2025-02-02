import { useState } from "react";

export default function FilterCategory({ title, options, onFilterChange }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleFiltering = (event) => {
    const { value, checked } = event.target;
    let updatedOptions;

    if (checked) {
      //copies into state all the options in the past that were selected and the newest one, giving them the blue check
      updatedOptions = [...selectedOptions, value];  
    } else {
      //removes the options that have been selected in state, removing the blue check on that option element
      updatedOptions = selectedOptions.filter((item) => item !== value); 
    }

    setSelectedOptions(updatedOptions);
    onFilterChange(updatedOptions); // whatever option(s) the user clicked is passed to parent component
  };

  return (
    <div>
      <span className="font-bold text-lg mb-4 inline-block">{title}</span>
      <br />
      {options.map((option) => (
        <div key={option} className="flex gap-2 mb-3">
          <input
            type="checkbox"
            value={option}
          // if an option is selected meaning that it is included the state array, this adds the blue check
            checked={selectedOptions.includes(option)}
            onChange={handleFiltering}
          />
          {/* makes the first letter of the option span uppercase */}
          <span>{option.charAt(0).toUpperCase() + option.slice(1)}</span>
        </div>
      ))}
    </div>
  );
}
