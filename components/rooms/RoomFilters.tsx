import { Button } from "@/components/ui/button";

interface RoomFiltersProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  { id: "all", label: "All Rooms" },
  { id: "standard", label: "Standard" },
  { id: "executive", label: "Executive" },
  { id: "suite", label: "Suites" },
];

export default function RoomFilters({ selectedFilter, onFilterChange }: RoomFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={selectedFilter === filter.id ? "default" : "outline"}
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}