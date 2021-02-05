import React from 'react';

const SearchInput = (props) =>{
    return(
        <div>
            <form >
                <input className="input" type="text" onChange={props.change}/>
                <button className="btnSubmit" onClick={props.click}>Submit</button>
            </form>           
        </div>
    );

}
export default SearchInput;