import React from 'react'

import './styles/_colors.css'
import './styles/global.css'
import Button from '_components/button'
import styles from './styles.css'

const App = () => (
  <div className={styles['app-container']}>
    <h1 className={styles['app-boilerplate-title']}>
      React Boilerplate working!!!
      <Button />
    </h1>
  </div>
)
export default App
