import React,{useState} from "react"

const SecondSide = () => {
    const createdigit = () =>{
       
        const digits = []

        for(let i = 1 ; i < 10; i++){
            digits.push(
                <button key={i} 
                onClick={() => updateCalc(i.toString()
                )}>
                    {i}
                </button>
            )

        }
        return digits;
    }
    const [calc,setCalc] = useState('')
        

    const operators = ['/' , '*' , '+' , '-']
    const [result,setResult] = useState('')
    
    const updateCalc = value => {
        if(operators.includes(value) && calc === '' ||
        operators.includes(value) && operators.includes(calc.slice(-1)
            )
        ) {
            return;
        }


          setCalc(calc + value)

          if(!operators.includes(value)){
              setResult(eval(calc+value)) 
          }
    }

    const calculate = () =>{
        setCalc(eval(calc).toString())
    }

    const deletelast = () => {
        if(calc=='')
        return;
        const value = calc.slice(0,-1);
        setCalc(value)
    }

    return(
        <div className="calculator">
           <div className="display">
             {result ? <span className="result">({result})</span> : ''} 
              {calc || "0"}
           </div>

           <div className="operators">
               <button onClick={() => updateCalc('/')}>/</button>
               <button onClick={() => updateCalc('*')}>*</button>
               <button onClick={() => updateCalc('+')}>+</button>
               <button onClick={() => updateCalc('-')}>-</button>

               <button onClick={deletelast}>Del</button>
           </div>

           <div className="digits">
               {createdigit()}
                <button onClick={() => updateCalc('0')}>0</button>
                <button onClick={() => updateCalc('.')}>.</button>
                <button onClick={calculate}>=</button>

           </div>
        </div>
    )

}

export default SecondSide