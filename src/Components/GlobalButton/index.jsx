class LoggingButton extends React.Component {
   // Essa sintaxe garante que o `this` seja vinculado ao handleClick.
   
   handleClick = () => {
     console.log('this is:', this);
   }
 
   render() {
     return (
       <button onClick={this.handleClick}>
         Clique Aqui
       </button>
     );
   }
 }

