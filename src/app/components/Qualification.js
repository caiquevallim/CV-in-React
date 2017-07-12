/**
 * Created by Caique on 07/07/2017.
 */
import React from 'react';
import SubTitle from './SubTitle';

export const Qualification = (props)=>{
  return(
      <div>
          <SubTitle subTitle={"Qualifications"}/>
          <div className="row">
              <ul>
                  <li>4 year as software developer, which are:
                      <ul>
                          <li>8 months as full stack web developer
                              <ul>
                                  <li>Front-End( HTML 5, CSS3, JavaScript ES6, AngularJS and Git).</li>
                                  <li>Back-End( Java, Spring, Hibernate and Oracle).</li>
                                  <li>Experience with Google Maps API.</li>
                                  <li>Experience with node.js</li>
                              </ul>
                          </li>
                          <li>1 month as ReactJS and ReactJS with Redux</li>
                          <li>2 years as Cobol programmer.</li>
                          <li>3 years as Delphi programmer and firebird as base server.</li>
                          <li>2 years of work experience with TortoiseSVN(version controller).</li>
                          <li>6 month as Free-Lancer in Delphi.</li>
                      </ul>
                  </li>

              </ul>
          </div>
      </div>
    );
};