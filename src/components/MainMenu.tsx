import { Link } from 'react-router-dom';
import { Icon } from '@iconify-icon/react';
import { useState } from 'react';
import { convertSwedishChars } from '../utils/convertSwedishChars.js';
import { categories } from '../db/categories.js';
import { filterByParent } from '../utils/filterByParent.js';
import { TitleProps, MainMenuPropTypes, SubHeaderProps } from '../types/mainMenu.js';

export type CategoriesType = typeof categories

export default function MainMenu({ setToggleMenu }: MainMenuPropTypes) {
  const [visibleMenu, setVisibleMenu] = useState<string[]>([])

  return (
    <div className='sideMenu'>
      <ul className='content'>
        {createMenu(categories, null)}
      </ul>
      <aside>
      </aside>
    </div>
  )

  function createMenu(list: CategoriesType, hasParent: string | null) {
    const subMenu = filterByParent(list, hasParent)
    return subMenu.map((child) => {
      const childURL = convertSwedishChars(child.menu.toLocaleLowerCase())

      if (!hasOwnChildren(list, child.menu)) return (
        <li className="singleCategory" key={child.menu} onClick={() => setToggleMenu(prev => !prev)}>
          <Link to={`/cat/${childURL}`}>{child.menu}</Link>
        </li>
      )

      return (
        <>
          <li key={child.menu} className={`expandable`}>
            <Title child={child} state={[visibleMenu, setVisibleMenu]}>
              <span>{child.menu}</span>
              <Icon icon="material-symbols:arrow-drop-down" />
            </Title>
            {(visibleMenu.includes(child.menu)) &&
              <>
                <SubHeader setToggleMenu={setToggleMenu}>
                  <Link to={`/cat/${childURL}`}>Allt i {child.menu}</Link>
                </SubHeader>
                <ul>
                  {createMenu(list, child.menu)}
                </ul>
              </>}
          </li>
          <hr />
        </>
      )
    })
  }
}

function hasOwnChildren(list: CategoriesType, menu: string) {
  return list.filter((menuObject) => {
    return list.some(menu => menu.parent?.includes(menuObject.menu))
  }).some(item => item.menu === menu)
}

/* Subheader */

function SubHeader({ children, setToggleMenu }: SubHeaderProps) {
  return (
    <div className='subHeader' onClick={() => setToggleMenu(prev => !prev)}>
      {children}
    </div>
  )
}

/* Title */

function Title({ child, state, children }: TitleProps) {
  const [visibleMenu, setVisibleMenu] = state

  function handleHeadingClick(currentMenu: string) {
    const exists = visibleMenu.some(activeMenu => activeMenu === currentMenu)
    if (exists) return setVisibleMenu(visibleMenu.filter(menu => menu !== currentMenu))
    return setVisibleMenu([...visibleMenu, currentMenu])
  }

  return (
    <div className='heading' onClick={() => handleHeadingClick(child.menu)}>
      {children}
    </div>
  )
}