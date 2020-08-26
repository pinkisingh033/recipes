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
                   <div>
         
                   <div class="Breakfast">
                
                     <button onClick={()=>{this.setState.router.map(router=>key={router.recipe_name},{router.recipe_process})}>Breakfast</button></div>
                   </div>
                   <div class="col-md-4">
                   <div class="Lunch"><button>Lunch</button></div>


                   <div class="col-md-4">
                   <div class="Dinner"><button>Dinner</button></div>
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


    export default class Recipes extends React.Component{
      constructor(){
        super();
        this.state={
          router: [{"recipe_name":"initial","recipe_process":"Initial process"}],
          something: "amarjit",
          rp:{"recipe_name":"initial","recipe_process":"Initial process"},
   
        }
      }
      componentDidMount(){
      
       fetch('http://localhost:4000/recipe_process')
        .then(res => res.json())
        .then(router => this.setState({router},()=> console.log('router fetched..', router)));
       }
       render(){
           return(
              
             <div>
               <h2>Food</h2>
               <ul>
                 "KaduKarela"
                 <h2> Recipe is:</h2>
                 {this.findsomething("KaduKarela") }
               </ul>
             </div>
           );
       }
     
           findsomething(rn){
         
         let {router}=this.state;
         console.log(router)
         //this.setState.rp=router.find(b=>b.recipe_name === "Pancake")["recipe_process"]
         
         console.log(router[0].recipe_process);
         let {rp} = this.state;
         let rpr = "Not Found"
         rp=router.find(b=>b.recipe_name === rn)
         if (rp){
         console.log(rp)
         rpr=rp.recipe_process
         }
         console.log(rpr);
         //return my_recipe["id"]
         return rpr;
        //return this.state.router[0]['recipe_name']
        }
   }
   
   
        