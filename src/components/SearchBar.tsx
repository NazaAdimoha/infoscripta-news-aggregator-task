import { useState } from "react"
import { TextInput, Button } from "@mantine/core"

interface SearchBarProps {
  onSearch: (value: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [value, setValue] = useState("")

  return (
    <div className="flex gap-2 justify-center">
      <TextInput
        placeholder="Search articles..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch(value)}
        className="w-4/5"
      />
      <Button onClick={() => onSearch(value)} className="w-1/5">Search</Button>
    </div>
  )
} 