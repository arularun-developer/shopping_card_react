import React, { useState } from "react";


function Cards(props) {
  
    const [isclicked, setisclicked] = useState(true);
    const [count, setcount] =useState(0);
    const [text ,settext] = useState('ADD TO CART');
    

    function handleclick() {

        
        if(isclicked == true){
            setisclicked(false);
            setcount(count + 1);
            settext("REMOVE TO CART")
            
           

       
        }else{
            setisclicked(true);
            setcount(count - 1 );
            settext('ADD TO CART')
            
        }

        

       
    }
   
   
    return (
        <> 
     

        
     <div>
     <section className="py-5" >
                <div className="container ">
                    <div className="row px-5 ">
                        <div className="col ">
                            <div className="card ">
                                {props.saletag}
                                <img className="card-img-top" src={props.url} alt="cloths" />
                                <div className="card-body ">
                                    <div className="text-center">
                                        <h5 className="fw-bold">{props.title}</h5>
                                       <h4 className="fw-bolder">{props.price}</h4> 
                                       <hr className="text-primary fs-100"></hr>
                          
                                    </div>
                                    <form className="d-flex justify-content-center me-2 px-5">
                        <button className="btn btn-outline-dark" type="submit">
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
                        </button>
                    </form>
      
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={handleclick}>{text}</a>

                                    </div>
                                    
                                </div>
                            </div>

                        </div>

                    </div>

                </div>


            </section>

     </div>
          
          
        </>
    )
}

export default Cards