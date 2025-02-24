import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Source = 'NewsAPI' | 'GuardianAPI' | 'NYTimes'
export type DateRange = '24h' | '7d' | '30d'

interface UserPreferences {
  selectedSources: Source[]
  selectedCategories: string[]
  dateRange: DateRange
}

interface Store extends UserPreferences {
  setSelectedSources: (sources: Source[]) => void
  setSelectedCategories: (categories: string[]) => void
  setDateRange: (range: DateRange) => void
  resetPreferences: () => void
}

const DEFAULT_PREFERENCES: UserPreferences = {
  selectedSources: ['NewsAPI', 'GuardianAPI', 'NYTimes'],
  selectedCategories: [],
  dateRange: '24h',
}

export const useStore = create<Store>()(
  persist(
    (set) => ({
      ...DEFAULT_PREFERENCES,
      setSelectedSources: (sources) => set({ selectedSources: sources }),
      setSelectedCategories: (categories) => set({ selectedCategories: categories }),
      setDateRange: (range) => set({ dateRange: range }),
      resetPreferences: () => set(DEFAULT_PREFERENCES),
    }),
    {
      name: 'news-preferences',
    }
  )
) 