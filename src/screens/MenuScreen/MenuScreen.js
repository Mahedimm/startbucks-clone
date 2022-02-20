import React from 'react';
import menuList from '../../../public/menuList.json';
import Header from '../../components/Header/Header';
import MenuItem from '../../components/MenuItem/MenuItem';
import './MenuScreen.css';
const MenuScreen = () => {
    return (
       <>
           <Header menuPage/>
           <div className="menuScreen__container">
               <div className="menuScreen__left">
                   {/* <Menulist/> */}
               </div>
               <div className="menuScreen__right">
                    <h1>Menu</h1>
                    <div className="menuScreen__category">
                        <h2>Drinks</h2>
                        <div className="menuScreen__items">
                            {menuList.map(menuListCategory => (menuListCategory.food.map(({type,path,image}) => (
                                <MenuItem />
                            ))))}
                        </div>
                    </div>
               </div>
           </div>
       </>
    );
};

export default MenuScreen;