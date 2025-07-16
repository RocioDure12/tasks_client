

export interface PaginationProps {
  currentPage: number;                      // Página actual (1-indexed)
  totalPages: number;                       // Total de páginas
  onPageChange?: (newPage: number) => void;  // Callback para cambiar de página
}
