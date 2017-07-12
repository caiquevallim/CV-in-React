/**
 * Created by Caique on 07/07/2017.
 */
import React from 'react';
import SubTitle from './SubTitle';

export const Education = (props)=>{
  return(
      <div>
          <SubTitle subTitle={"Education"}/>
          <div className="row">
              <ul>
                  <li>2017 - Now	 Fullstack JavaScript Developer (ES6, MongoDB, Babel, Node.js, React) -LinkedIn Learning</li>
                  <li>2015 - 2016     English (intermediate)–Cultura Inglesa, Araçatuba,SP</li>
                  <li>French (Basic) – Excellent Global, Araçatuba, SP.</li>
                  <li>Computer Engineer – Unisalesiano, Araçatuba, SP</li>
              </ul>
          </div>
      </div>
  );
};