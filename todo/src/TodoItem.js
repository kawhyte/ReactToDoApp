import React from 'react'

function TodoItem(){
    return (
        <div >
            <span>
              <input type="checkbox" id="scales" name="scales" />
              {" "}
              <label for="scales">Scales</label>
            </span>
            <p>
              <input type="checkbox" id="scales" name="scales" />
              <label for="scales">Tables</label>
            </p>
            <div>
              <input type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
        
        </div>
      );

}

export default TodoItem