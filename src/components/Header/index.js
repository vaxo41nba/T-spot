import React from 'react';

import './styles.css';

export default function Header() {
  return (
    <div className="header-container">
      <div className="navigation">
        <div className="header-element">tspot.ge</div>
        <div className="header-element">ბლოგი</div>
        <div className="header-element">სერვისები</div>
        <div className="header-element">სპეციალისტები</div>
      </div>

      <div className="user-menu">
        <div className="header-element">შესვლა</div>
        <div className="header-element">რეგისტრაცია</div>
      </div>
    </div>
  );
}
