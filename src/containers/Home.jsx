
import React from 'react';
import {connect} from 'react-redux' 

import '../assets/styles/app.scss'

import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import useInitialState from '../hooks/useInitialState'



const App =({trends, myList, originals})=>{

  return (
    <>
      <Search/>
        { myList.length > 0 &&
          <Categories title="Mi lista">
            <Carousel >
            {
              myList.map(item =>
                <CarouselItem 
                  key={item.id} 
                  isList
                  {...item}
                 />
            )}
            </Carousel>
          </Categories>
        }
      <Categories title="Tendencias">
        <Carousel >
          {
            trends.map(item =>
              <CarouselItem key={item.id} {...item} />
          )}
          </Carousel>
      </Categories>
      <Categories title="Betty Video">
        <Carousel >
        {
            originals.map(item =>
              <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
    </>
  )}
const mapStateToProps = state =>{
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals
  }
};

export default connect(mapStateToProps,null)(App)