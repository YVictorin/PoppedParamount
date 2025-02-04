import React from 'react';

import PropTypes from 'prop-types';

const ExperienceBar = ({ amount }) => {
    const totalBars = 100;
    //if the amount prop is 25 and totalBars is 50, 50% of the bars will be filled in
    const filledBars = Math.round((amount / 100) * totalBars);

    return (
        <div className="flex space-x-1 ml-6">
            {/* generates an array with the length of 100 */}
            {Array.from({ length: totalBars }, (_, index) => (
                <div
                    key={index}
                                        //changes the color of all the bars below the current index 
                    className={`w-1 h-7 ${index < filledBars ? 'bg-blue-400' : 'bg-slate-500'}`}
                />
            ))}
        </div>
    );
};

ExperienceBar.PropTypes = {
    amount: PropTypes.number.isRequired
}

export default ExperienceBar;
