/**
 * Created by Caique on 07/07/2017.
 */
import React from 'react';
//https://www.google.com.br/imgres?imgurl=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2F91%2F12%2Fca%2F9112cad66fd7c4082b6aad04d42f5183--web-designer-resume-resume-design.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fexplore%2Ffront-end-design%2F&docid=UPkqT6fecyKvSM&tbnid=sz2jYZjwvLE1HM%3A&vet=1&w=690&h=1024&bih=967&biw=1920&ved=0ahUKEwie_8Cf14HVAhWHTJAKHe42Dw0Q__EBCAM&iact=c&ictx=1
export const Perfil =(props)=>{
    return(
        <div className="row">
            <div className="col-md-3 perfil">
            </div>
            <div className="col-md-7">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Caique Vallim Araujo</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10">
                        <h2>
                            Full Stack Web Developer for <a href="http://www.solinftec.com/" target="_blank">
                                <img src="/app/styles/img/logo_solinftec.png" alt="Solinftec"/>
                            </a>
                        </h2>
                    </div>
                    <div className="col-md-2">
                        <div style={{boxShadow:"0px 0px 10px 10px #d3d3d3", width:"165.24px", height:"93.71px"}}>
                            <img className="img-responsive" src="/app/styles/img/react_redux.png" alt="React with Redux"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p>Araçatuba, São Paulo</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2">
                        <a href="https://www.linkedin.com/in/caique-vallim-230443ba/" target="_blank">
                            <img src="./app/styles/img/linkedIn.png" alt="linkedIn" className="linked-in img-responsive"/>
                        </a>
                    </div>
                    <div className="col-xs-2">
                        <a href="https://www.facebook.com/caique.vallim.7" target="_blank">
                            <img src="./app/styles/img/facebook.png" alt="facebook" className="linked-in img-responsive"/>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};
