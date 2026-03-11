"use client"

import Link from "next/link"
import type { ReactNode } from "react"

interface LinkCardProps {
  href: string
  icon: ReactNode
  title: string
  description?: string
}

export function LinkCard({ href, icon, title, description }: LinkCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-pink-500/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/10"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500/10 to-purple-500/10 text-foreground transition-all group-hover:from-pink-500 group-hover:to-purple-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-pink-500/25">
        {icon}
      </div>
      <div className="relative flex flex-col">
        <span className="font-medium text-foreground">{title}</span>
        {description && (
          <span className="text-sm text-muted-foreground">{description}</span>
        )}
      </div>
      <svg
        className="relative ml-auto h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-pink-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  )
}
