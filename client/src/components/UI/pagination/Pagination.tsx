import React from 'react'

interface propsPagination {
    pagesArray: Array<number>,
    changePage: (page: number) => void,
    page: number
}

const Pagination: React.FC<propsPagination> = ({ pagesArray, changePage, page }) => {
    return (
        <div className='page__wrapper'>
            {pagesArray.map((p: number) => {
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