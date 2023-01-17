import { ReactNode } from "react"

export type MainMenuPropTypes = {
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export type SubHeaderProps = {
  children: ReactNode
} & MainMenuPropTypes

export type TitleProps = {
  child: { menu: string, parent: string | null }
  state: [string[], React.Dispatch<React.SetStateAction<string[]>>]
  children: ReactNode
}