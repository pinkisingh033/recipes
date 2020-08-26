
let bf=JSON.parse('["KaduKarela","Pancake","Tacos"]')
console.log(bf)
for (let a of bf){
    console.log(a)

}
  
    render(){
      return(
      
         
        <div>

     <button onClick={() => this.setState({ show_breakfast_list: true })}>Breakfast</button>
     { this.state.show_breakfast_list ? <p>{this.state.breakfast_list}</p> : null }
     
       
        
        
         
          <h2>Food</h2>
          <ul>
            "KaduKarela"
            <h2> Recipe is:</h2>
            {this.findsomething("KaduKarela") }
          </ul>
          <ul>
            "Pancake"
            <h2> Recipe is:</h2>
            {this.findsomething("Pancake") }
          </ul>
        
        </div>
      );
  }
  
 