import React from 'react'
import './Recipereact.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './gajar.png';
//import './Breakfast.js';
import { render } from '@testing-library/react';


function Recipe() {
 
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
    <div class="Breakfast"><button>Breakfast</button></div>
    


  <div class="col-md-4">
  <div class="Lunch"><button>Lunch</button></div>


  <div class="col-md-4">
  <div class="Dinner"><button>Dinner</button></div>
  
  <div class="footer">
          <p> <a href="/">Contact Us</a>
             <a href="/">Privacy Policy</a>
             <a href="/">Terms</a></p>
     </div>

 </div> </div> </div> </div>
  </div>
  </div>
  </div>
  </div>

</div> </div> </div>

 );
}

/*export default class Recipes extends React.Component{
  
  constructor(){
    super();
    this.state={
 
      recipe_steps: [{"recipe_name":"initial","recipe_process":"Initial process"}],
      something: "amarjit",
      rp:{"recipe_name":"initial","recipe_process":"Initial process"},
      breakfast_list:[],
      show_breakfast_list: false, 
      list:"breakfast_list",
      recipe_details: "recipe details"
    }
  
}
findsomething(rn){
  let {recipe_steps}=this.state;
  let {rp} = this.state;
    
    rp=recipe_steps.find(b=>b.recipe_name === rn)
}

  componentDidMount(){
      
    fetch('http://localhost:4000/recipe_process').then(res => res.json()).then(resjson => this.setState({recipe_steps:resjson},()=> console.log('router fetched..', resjson)));

    fetch('http://localhost:4000/breakfastlist').then(res1 => res1.json()).then(res1json => this.setState({breakfast_list:res1json},()=> console.log('router fetched..', res1json)));


    }
   
    render(){
      return(
   <div>
     
     <button onClick={() => this.setState({ show_breakfast_list: true })}>Breakfast</button>
      { this.state.show_breakfast_list ?c
     
      <p>{this.state.recipe_details}</p>
      
      <p>--------- Ignore anythihg below this----------</p>
     
         
        
        </div>
      );
  }
  
  
  <h2>Food</h2>
          <ul>
            "KaduKarela"
            <h2> Recipe is:</h2>
            {this.findsomething("Pancake") }
          </ul>
          <ul>
            "Pancake"
            <h2> Recipe is:</h2>
            {this.findsomething("Pancake") }
          </ul>
  
  findsomething(rn){
       
    let {recipe_steps}=this.state;
    console.log(recipe_steps)
    //this.setState.rp=router.find(b=>b.recipe_name === "Pancake")["recipe_process"]
    
    console.log(recipe_steps[0].recipe_process);
    let {rp} = this.state;
    let rpr = "Not Found"
    rp=recipe_steps.find(b=>b.recipe_name === rn)
    if (rp){
    console.log(rp)
    rpr=rp.recipe_process
    }
    console.log(rpr);
    let {recipe_details}=this.state;
  recipe_details="recipe_steps";
  
  this.setState({recipe_details});
    
    //return my_recipe["id"]
    return rpr;
   //return this.state.router[0]['recipe_name']
   }

   
   
   }  */



    
  




  
   
    
