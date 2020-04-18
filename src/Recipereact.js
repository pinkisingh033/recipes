import React from 'react'
import './Recipereact.css';
import 'bootstrap/dist/css/bootstrap.css';
import './gajar.png';

export default class Recipes extends React.Component{
   
   
    render(){
        return(
          
          <div>
            
             <div class="topnav">
                    <p>  <a href="/">Search</a>
                         <a href="/">Recipes</a>
                         <a href="/">Login</a>
                         <a href="/">Home</a> </p> 
            </div>

            <div class="container-fluid gajar">
              <div class="row">
              <div clas="col-lg-12">
              <div class="box1">

              <div>
               <div class="container1">
               <div class="row">
                 <div class="col-md-4">
                   <div class="Breakfast">Breakfast</div>

                   <div class="col-md-4">
                   <div class="Lunch">Lunch</div>


                   <div class="col-md-4">
                   <div class="Dinner">Dinner</div>
                  </div>
                

                </div>

                 </div>

                 </div>
               </div>
            </div>
            </div>
            </div>
               </div>
            </div>
            <div class="footer">
                      <p> <a href="/">Contact Us</a>
                         <a href="/">Privacy Policy</a>
                         <a href="/">Terms</a></p>
                 </div>

      
    </div>






            
          
         

       

                
          

        );
    }
}


