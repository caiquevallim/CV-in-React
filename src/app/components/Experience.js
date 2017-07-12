/**
 * Created by Caique on 07/07/2017.
 */
import React from 'react';
import SubTitle from './SubTitle';

export const Experience = (props)=>{
  return(
      <div>
          <SubTitle subTitle={"Work Experience"}/>
          <div className="row">
              <ul>
                  <li>2016 – Now: Full-Stack Developer – Solinftec – Araçatuba, SP.
                      <ul>
                          <li>Team member of developers, working in a new building project, which this will work in the soy’s farm.</li>
                          <li>Fleets monitoring in real time using Google Maps, getting the coordinates which are send by boards of the fleets control of all state, for example control of speed in real time.</li>
                          <li>Control of meteorology by meteorology stations which installed for us (another team).</li>
                      </ul>
                  </li>
                  <li>2015 – 2016: Cobol Developer – Soft-Line Sistemas – Araçatuba, SP.
                      <ul>
                          <li>Famility with SCRUM.</li>
                          <li>Building and maintenance with software ERP.</li>
                      </ul>
                  </li>
                  <li>2016 – 2017: Delphi Developer - Free-Lancer
                      <ul>
                          <li>I’ve building a system for fisioteraphy store.</li>
                          <li>Integration with e-commerce by webservice develop in Delphi XE.</li>
                      </ul>
                  </li>
              </ul>
          </div>

      </div>
  );
};