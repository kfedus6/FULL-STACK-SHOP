import React from 'react'

const Pagination = ({ pagesArray, changePage, page }: any) => {
    return (
        <div className='page__wrapper'>
            {pagesArray.map((p: any) => {
                return (
                    <span
                        onClick={() => changePage(p)}
                        key={p}
                        className={page === p ? 'page page__current' : 'page'}
                    >{p}</span>
                )
            })}
        </div>
    )
};

export default Pagination;