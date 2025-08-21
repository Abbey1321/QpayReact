import { createContext, useContext, useMemo, useState } from 'react'

const AppContext = createContext()

export function AppProvider({ children }){
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [profileProgress, setProfileProgress] = useState(30)
  const [totals, setTotals] = useState({
    accounts: 1500,
    transactions: 2100,
    settlement: 2300,
    qrOrders: 45000
  })

  const value = useMemo(()=>({
    sidebarOpen, setSidebarOpen,
    profileProgress, setProfileProgress,
    totals, setTotals
  }),[sidebarOpen, profileProgress, totals])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => useContext(AppContext)