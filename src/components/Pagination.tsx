import { Button } from "@mantine/core"

interface PaginationProps {
  currentPage: number
  onPageChange: (page: number) => void
  hasMore: boolean
  isLoading: boolean
}

export function Pagination({ currentPage, onPageChange, hasMore, isLoading }: PaginationProps) {
  return (
    <div className="flex items-center justify-between">
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || isLoading}
      >
        Previous
      </Button>
      <span className="text-sm text-muted-foreground">
        Page {currentPage}
      </span>
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasMore || isLoading}
      >
        Next
      </Button>
    </div>
  )
} 