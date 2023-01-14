// Sub-header below

import { ReactNode } from "react"

export function Subheader({ isWide, children }: { isWide: boolean, children: ReactNode }) {
  let className = isWide ? "subheader subheader-wide" : "subheader subheader-narrow"
  return (
    <div className={`${className}`}>
      {children}
    </div>
  )
}

export function SellingPoints({ children }: { children: ReactNode }) {
  return (
    <ul className="selling-points">
      {/* wrap each child with this Icon: <Icon icon="material-symbols:check-small-rounded" /> */}
      {children}
    </ul>
  )
}

interface SubheaderProps {
  link: string
  children: string
}

export function SubheaderCTA({ link, children }: SubheaderProps) {
  return (
    <a href={link}>
      <span className="cta">{children}</span>
    </a>
  )
}

// Main Header below

export function RightNav({ children }: { children: ReactNode }) {
  return (
    <ul className="nav">
      {children}
    </ul>
  )
}

export function Search() {
  return (
    <div className="search">
      <input type="search" placeholder="Search for products.." />
    </div>
  )
}