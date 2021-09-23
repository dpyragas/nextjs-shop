import React from 'react';

export interface PaginationProps {
  onClick: any;
}

export const Pagination: React.FC<PaginationProps> = ({ onClick }) => {
  return (
    <div className='flex justify-center'>
      <div className='flex'>
        <div
          className='p-2 my-3 text-lg block border-2 border-black cursor-pointer mr-3 text-black bg-white-500 hover:bg-gray-900 hover:text-white'
          onClick={onClick}
        >
          Load More...
        </div>
      </div>
    </div>
  );
};
