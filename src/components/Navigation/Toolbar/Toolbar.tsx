import React    from 'react'
import './toolbar.css'
import Logo     from '../../Logo/Logo'

const toolbar = (props: any) =>(
  <header className='Toolbar'>
      <div>Menu</div>
      <Logo />
      <nav>
          <ul>...</ul>
      </nav>
  </header>
);

export default toolbar;