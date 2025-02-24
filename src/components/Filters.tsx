import { useStore } from "../store/useStore"
import { Checkbox, Radio, Text } from "@mantine/core"

type Source = 'NewsAPI' | 'GuardianAPI' | 'NYTimes'
type DateRange = '24h' | '7d' | '30d'
const SOURCES: Source[] = ['NewsAPI', 'GuardianAPI', 'NYTimes']

export function Filters() {
  const { 
    selectedSources, 
    setSelectedSources,
    dateRange,
    setDateRange
  } = useStore()

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Text size="sm" fw={500}>Sources</Text>
        <div className="space-y-2">
          {SOURCES.map((source) => (
            <div key={source} className="flex items-center space-x-2">
              <Checkbox
                id={source}
                checked={selectedSources.includes(source)}
                onChange={(event) => {
                  setSelectedSources(
                    event.currentTarget.checked
                      ? [...selectedSources, source]
                      : selectedSources.filter((s) => s !== source)
                  )
                }}
                label={source}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <Text size="sm" fw={500}>Date Range</Text>
        <Radio.Group
          value={dateRange as DateRange}
          onChange={(value) => setDateRange(value as DateRange)}
        >
          <div className="space-y-2">
            <Radio value="24h" label="Last 24 hours" />
            <Radio value="7d" label="Last 7 days" />
            <Radio value="30d" label="Last 30 days" />
          </div>
        </Radio.Group>
      </div>
    </div>
  )
} 