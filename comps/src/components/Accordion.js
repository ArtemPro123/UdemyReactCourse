import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion({items}){

const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    if(expandedIndex === nextIndex) {
      setExpandedIndex(-1)
    } else {
      setExpandedIndex(nextIndex);
    }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    console.log(isExpanded);

    const content = isExpanded && <div className='border-b p-5'>{item.content}</div>

    const icon = <span className='text-xl'>
      {isExpanded ? <GoChevronDown />:<GoChevronLeft />}
    </span>

    return(
      <div key={item.id}>
        <div className="flex justify-between p-2 bg-gray-50 items-center cursor-pointer" onClick={() => handleClick(index)}>
          {item.label}
          {icon}
        </div>
        {content}
      </div>
    );
  });
  return (
  
  <div className='border-x border-t rounded'>{renderedItems}</div>
  
  )
}

export default Accordion;