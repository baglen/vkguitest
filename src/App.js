import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './styles.css';
import photo from './photo.png';

const App = () => {
	return (
		<AdaptivityProvider>
			<AppRoot>
				<div className='parent'>
        <div className="header">
          <p /><h1>Команда 'Microrobots' | Вездекод · Марафон ВКонтакте</h1><p />
        </div>
        <ul style={{display: 'flex', listStyleType: 'none', justifyContent: 'center', flexWrap: 'wrap'}}>
          <li>
            <div className="carousel-element">
              <img src={photo} className="carousel-image" />
              <p /><h2>Даниил Журавко</h2><p />
              <p>Android-разработчик</p>
            </div>
          </li>
          <li>
            <div className="carousel-element">
              <img src={photo} className="carousel-image" />
              <p /><h2>Шпак Артём</h2><p />
              <p>Desktop-разработчик</p>
            </div>
          </li>
          <li>
            <div className="carousel-element">
              <img src={photo} className="carousel-image" />
              <p /><h2>Арьков Александр</h2><p />
              <p>Full-Stack-разработчик</p>
            </div>
          </li>
          <li>
            <div className="carousel-element">
              <img src={photo} className="carousel-image" />
              <p /><h2>Лукки Никита</h2><p />
              <p>Desktop-разработчик</p>
            </div>
          </li>
        </ul>
      </div>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
