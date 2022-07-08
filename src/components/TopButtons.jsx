import React from 'react'

const TopButtons = ({ setQuery }) => {
    const handleClick = (title) => {
        //console.log(title);
        setQuery({ q: title });
    }
    const cities = [
        {
            id: 1,
            title: 'Palo Alto'
        },
        {
            id: 2,
            title: 'New York'
        },
        {
            id: 3,
            title: 'London'
        },
        {
            id: 4,
            title: 'Singapore'
        },
        {
            id: 5,
            title: 'Toronto'
        },
    ]
    return (
        <div className="flex items-center justify-between my-6 ">
            {cities.map(({ id, title }) => (
                <button key={id}
                    className="text-white text-lg font-medium "
                    onClick={() => handleClick(title)}
                >
                    {title}
                </button>
            ))}
        </div>
    )
}

export default TopButtons