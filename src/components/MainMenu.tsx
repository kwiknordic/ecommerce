import { Link } from 'react-router-dom';
import { Icon } from '@iconify-icon/react';
import { useState } from 'react';
import { convertSwedishChars } from '../utils/convertSwedishChars.js';
import { categories } from '../db/categories.js';
import { filterByParent } from '../utils/filterByParent.js';

function hasOwnChildren(list: CategoriesType, menu: string) {
  return list.filter((menuObject) => {
    return list.some(menu => menu.parent?.includes(menuObject.menu))
  }).some(item => item.menu === menu)
}

export type CategoriesType = typeof categories
type MainMenuPropTypes = {
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MainMenu({ setToggleMenu }: MainMenuPropTypes) {
  const [toggleSubMenu, setToggleSubMenu] = useState<string[]>([])

  function handleHeadingClick(currentMenu: string) {
    const exists = toggleSubMenu.some(activeMenu => activeMenu === currentMenu)
    if (exists) return setToggleSubMenu(toggleSubMenu.filter(menu => menu !== currentMenu))
    return setToggleSubMenu([...toggleSubMenu, currentMenu])
  }

  function createMenu(list: CategoriesType, hasParent: string | null) {
    const children = filterByParent(list, hasParent)
    return children.map((child) => {
      const childHref = convertSwedishChars(child.menu.toLocaleLowerCase())
      if (hasOwnChildren(list, child.menu)) return (
        <>
          <li key={child.menu} className={`expandable`}>
            <div className='heading' onClick={() => handleHeadingClick(child.menu)}>
              <span>{child.menu}</span>
              <Icon icon="material-symbols:arrow-drop-down" />
            </div>
            {(toggleSubMenu.includes(child.menu)) && <>
              <div className='overview' onClick={() => setToggleMenu(prev => !prev)}>
                <Link to={`/cat/${childHref}`}>Allt i {child.menu}</Link>
              </div>
              <ul className={"leaf"}>
                {createMenu(list, child.menu)}
              </ul>
            </>}
          </li >
          <hr />
        </>
      )

      return <li key={child.menu}><Link to={`/cat/${childHref}`}>{child.menu}</Link></li>
    })
  }

  return (
    <div className='sideMenu'>
      <ul className='content'>
        {createMenu(categories, null)}
      </ul>
      <aside>
      </aside>
    </div>
  )
}