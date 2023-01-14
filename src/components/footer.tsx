import { ReactNode } from "react"

export function About({ children }: { children: ReactNode }) {
  return (
    <div className="about">
      {children}
    </div>
  )
}

export function FooterMenuLinks({ children }: { children: ReactNode }) {
  return (
    <ul>
      {children}
    </ul>
  )
}

export function FooterMenuHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="heading">{children}</h3>
  )
}

export function Copyright() {
  return (
    <div className="copyright">
      <span>© Kwik (datum)</span>
    </div>
  )
}