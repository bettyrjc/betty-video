
import React, {useState, useEffect} from 'react';
import '../assets/styles/app.scss'

import Header from '../components/Header'
import Search from '../components/Search'
import Footer from '../components/Footer'

import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import useInitialState from '../hooks/useInitialState'

const API = 'http://localhost:3000/initalState'

const App =()=>{
  const initialState = useInitialState(API)
  return initialState.length === 0 ? <h1>Loading...</h1> : (
    <div className="App">
      <Header/>
      <Search/>
        { initialState.mylist.length > 0 &&
          <Categories title="Mi lista">
            <Carousel >
            {
              initialState.mylist.map(item =>
                <CarouselItem key={item.id} {...item} />
            )}
            </Carousel>
          </Categories>
        }
      <Categories title="Tendencias">
        <Carousel >
          {
            initialState.trends.map(item =>
              <CarouselItem key={item.id} {...item} />
          )}
          </Carousel>
      </Categories>
      <Categories title="Betty Video">
        <Carousel >
        {
            initialState.originals.map(item =>
              <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
    <Footer/>
    </div>
  )}
export default App