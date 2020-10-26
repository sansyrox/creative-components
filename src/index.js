import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { default as Following_Cursor } from '../components/following-cursor'
export { default as SimpleGrid } from '../layouts/SimpleGrid'
