import React from 'react'

type Props = {
    heading: string;
};

const SectionHeading = ({ heading } : Props) => {
  return (
    <div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">
            {heading}
            </h1>
        <p className="text-sm text-gray-700">Lorem ipsun dolor sit amet</p>
    </div>
  )
}

export default SectionHeading;