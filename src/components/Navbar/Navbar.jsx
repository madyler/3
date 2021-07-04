import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import DialogItem from "../Dialogs/DialogItem/DialogItem";

const Navbar = ({dialogsPage, sidebar}) => {

  let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem ava={d.ava}
                                                                 name={d.name}
                                                                 key={d.id}
                                                                 id={d.id}
  />);
  let linksElements = sidebar.sidebar.map( n => <NavLink to={n.path}
                                                         key={n.id}
                                                         id={n.id}
                                                         activeClassName={s.active}>{n.page}<br/></NavLink>);

  return <nav className={s.nav}>
    <div className={s.item}>
      <a>
        {linksElements}
      </a>
    </div>
      {dialogsElements}
  </nav>
}

export default Navbar;