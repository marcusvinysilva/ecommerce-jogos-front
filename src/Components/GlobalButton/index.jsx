class LoggingButton extends React.Component {
   // Essa sintaxe garante que o `this` seja vinculado ao handleClick.
   // Usado o CodePen, do site https://pt-br.reactjs.org/docs/handling-events.html
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

