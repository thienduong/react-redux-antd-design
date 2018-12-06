import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import { Rate, Button } from 'antd'

export const HomeView = () => (
  <div>
    <i className='fa fa-facebook' />
    <Rate allowHalf defaultValue={2.5} />
    <Button type='primary'>Primary</Button>
    <h4>Welcome!</h4>
    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
  </div>
)

export default HomeView
