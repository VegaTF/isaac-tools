export function Pagination ({ currentPage, totalPages, onPageChange }) {
    if (totalPages <= 1) return null

    const maxVisiblePages = 11;
    
    // 1. Calculamos el rango dinámico
    let startPage = Math.max(1, currentPage - 5);
    let endPage = startPage + maxVisiblePages - 1;

    // 2. Si nos pasamos del total, corregimos
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    // 3. Generamos el array de números
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return(
        <div className="pagination-container">
            {pageNumbers.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={page === currentPage ? 'active' : ''}
                >
                    {page}
                </button>
            ))}
        </div>
    )
}