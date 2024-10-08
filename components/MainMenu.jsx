import { useState } from "react";
import { Menu } from "./icon/Menu";
import { ThemeChanger } from "./ThemeChanger";

export function MainMenu({ items }) {
  return (
    <div>
      <div className="hidden lg:flex font-bold">
        {items?.map((item) => (
          <a key={item.id} className="px-4 py-2" href={item.link}>
            {item.label}
          </a>
        ))}
      </div>

      <MobileMenu items={items} />
    </div>
  );
}

function MobileMenu({ items }) {
  const [visible, setVisible] = useState(false);

  // let open = false;

  function openMenu() {
    // open=true;
    setVisible(true);
  }

  function closeMenu() {
    // open=false;
    setVisible(false);
  }

  return (
    <>
      <button className="flex lg:hidden" onClick={openMenu}>
        <Menu />
      </button>
      {visible && <div className="z-10 fixed bg-slate-900/70 inset-0"></div>}

      <div
        className={`z-20 fixed top-0 bottom-0 w-3/6 transition-all dark:bg-black bg-white ${
          visible ? "right-0" : "-right-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b-4">
          <button onClick={closeMenu}>X</button>
          <ThemeChanger />
          <div className="text-2xl">Menu</div>
        </div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <a className="block py-2 px-4" href={item.link}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
