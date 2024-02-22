import { createContext, useContext, useState } from "react"
import Toast from "../components/Toast"
import { useQuery } from "react-query"

import * as apiClient from "../api-client"

type ToastMessage = {
  message: string
  type: "SUCCESS" | "ERROR"
}
type AppContext = {
  showToast: (toastMessage: ToastMessage) => void
  isLoggedIn: boolean
}
type AppContextProviderProps = {
  children: React.ReactNode
}

const AppContext = createContext<AppContext | undefined>(undefined)
export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [toast, setToast] = useState<ToastMessage | undefined>(undefined)
console.log('before')
  const { isError } = useQuery("validateToken", apiClient.validateToken,{retry:false})
 console.log("after")

  return (
    <AppContext.Provider
      value={{
        showToast: (toastMessage) => {
          setToast(toastMessage)
        },
        isLoggedIn: !isError,
      }}
    >
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={() => setToast(undefined)} />
      )}
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  return context as AppContext
}
