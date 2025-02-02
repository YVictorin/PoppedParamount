import { useRef } from 'react';

export default function SortFilter({ setPriceFilter }) {
    const selectRef = useRef(null);

    const handleFiltering = () => {
        const selectedVal = selectRef.current.value;
        setPriceFilter(selectedVal); // set the selected price filter in the parent
    };

    return (
        <>
          <div className='mb-4'>
            <label htmlFor="sort" className="mr-2">Sort by</label>
            <select onChange={handleFiltering} ref={selectRef} name="sort" id="sort" className='bg-transparent'>
                <option value="all">Best Match</option>
                <option value="low">Lowest Price</option>
                <option value="high">Highest Price</option>
            </select>
          </div>
        </>
    );
}
