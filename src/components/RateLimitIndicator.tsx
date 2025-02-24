import { Progress, Text } from "@mantine/core"
import { Source } from "../store/useStore"

interface RateLimit {
  source: Source
  remaining: number
  total: number
}

interface RateLimitIndicatorProps {
  limits: RateLimit[]
}

export function RateLimitIndicator({ limits }: RateLimitIndicatorProps) {
  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <Text size="sm" fw={500}>API Rate Limits</Text>
      <div className="space-y-3">
        {limits.map((limit) => (
          <div key={limit.source} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span>{limit.source}</span>
              <span>{limit.remaining}/{limit.total}</span>
            </div>
            <Progress 
              value={(limit.remaining / limit.total) * 100} 
              size="sm"
            />
          </div>
        ))}
      </div>
    </div>
  )
} 