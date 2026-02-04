"use client"

import { createContext, useContext, useState } from "react"

type UserMode = "student" | "founder"

const UserModeContext = createContext<{
  mode: UserMode
  setMode: (mode: UserMode) => void
} | null>(null)

export function UserModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<UserMode>("founder")

  return (
    <UserModeContext.Provider value={{ mode, setMode }}>
      {children}
    </UserModeContext.Provider>
  )
}

export function useUserMode() {
  const ctx = useContext(UserModeContext)
  if (!ctx) {
    throw new Error("useUserMode must be used inside UserModeProvider")
  }
  return ctx
}
