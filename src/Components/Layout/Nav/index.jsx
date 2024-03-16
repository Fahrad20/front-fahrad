import s from "./style.module.scss";
import { ReactComponent as Arrow } from "../../../assets/icons/menu_arrow.svg";

export const Nav = ({ openBurger }) => {
  return (
    <nav className={openBurger}>
      <ul className={s.mainMenu}>
        <li>
          Demos <Arrow />
          <ul className={s.subMenu}>
            <li>
              Post Header <Arrow />
            </li>
            <li>
              Post Layout <Arrow />
            </li>
            <li>
              Share Buttons <Arrow />
            </li>
            <li>
              Gallery Post <Arrow />
            </li>
            <li>
              Video Post <Arrow />
            </li>
          </ul>
        </li>
        <li>
          Post <Arrow />
          <ul className={s.subMenu}>
            <li>
              Post Header <Arrow />
            </li>
            <li>
              Post Layout <Arrow />
            </li>
            <li>
              Share Buttons <Arrow />
            </li>
            <li>
              Gallery Post <Arrow />
            </li>
            <li>
              Video Post <Arrow />
            </li>
          </ul>
        </li>
        <li>
          Features <Arrow />
          <ul className={s.subMenu}>
            <li>
              Post Header <Arrow />
            </li>
            <li>
              Post Layout <Arrow />
            </li>
            <li>
              Share Buttons <Arrow />
            </li>
            <li>
              Gallery Post <Arrow />
            </li>
            <li>
              Video Post <Arrow />
            </li>
          </ul>
        </li>
        <li>
          Categories <Arrow />
          <ul className={s.subMenu}>
            <li>
              Post Header <Arrow />
            </li>
            <li>
              Post Layout <Arrow />
            </li>
            <li>
              Share Buttons <Arrow />
            </li>
            <li>
              Gallery Post <Arrow />
            </li>
            <li>
              Video Post <Arrow />
            </li>
          </ul>
        </li>
        <li>
          Shop <Arrow />
          <ul className={s.subMenu}>
            <li>
              Post Header <Arrow />
            </li>
            <li>
              Post Layout <Arrow />
            </li>
            <li>
              Share Buttons <Arrow />
            </li>
            <li>
              Gallery Post <Arrow />
            </li>
            <li>
              Video Post <Arrow />
            </li>
          </ul>
        </li>
        <li>
          Buy Now <Arrow />
          <ul className={s.subMenu}>
            <li>
              Post Header <Arrow />
            </li>
            <li>
              Post Layout <Arrow />
            </li>
            <li>
              Share Buttons <Arrow />
            </li>
            <li>
              Gallery Post <Arrow />
            </li>
            <li>
              Video Post <Arrow />
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
