"use client"

import { useEffect } from "react"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
}

export default function SuccessModal({ isOpen, onClose, title, message }: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 4000)
      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 bg-secondary/90 backdrop-blur-xl rounded-2xl p-8 max-w-md w-full mx-4 border border-primary/30 shadow-2xl animate-in fade-in scale-in duration-300">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full mb-6 animate-pulse">
            <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-foreground/70 mb-6">{message}</p>
          <div className="w-full h-1 bg-gradient-to-r from-primary via-emerald-500 to-primary rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}
