import { PaginationProps } from "../models/PaginationProps";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./Button";


export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrev = () => {
    if (currentPage > 1 && onPageChange) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages && onPageChange) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className="flex items-center justify-center gap-6 p-4 bg-primary-50 rounded-xl  text-primary-950">
      <Button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="
          flex items-center justify-center p-2 rounded-full
          bg-primary-500 text-primary-contrast-400
          hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed
          transition-colors duration-200
        "
      >
        <ArrowLeft size={20} />
      </Button>

      <span className="font-medium text-sm text-primary-950">
        Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong>
      </span>

      <Button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="
          flex items-center justify-center p-2 rounded-full
          bg-primary-500 text-primary-contrast-400
         disabled:opacity-50 disabled:cursor-not-allowed
        transition-colors duration-200
        "
      >
        <ArrowRight size={20} />
      </Button>
    </div>
  );
};
