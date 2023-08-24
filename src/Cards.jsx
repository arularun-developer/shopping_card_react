import React, { useState } from "react";


function Cards(props) {

    const [text, setText] = useState("ADD TO CART");
    const [addCartCounts, setAddCartCounts] = useState(0);

    const handleclick = () => {
        setText(text == "ADD TO CART" ? "REMOVE TO CART" : "ADD TO CART");

        let totalCount=0

        if (text == "ADD TO CART") {
            totalCount=addCartCounts + 1
            setAddCartCounts(totalCount);
        } else {
            totalCount=addCartCounts - 1
            setAddCartCounts(totalCount);
        }
        props.data(totalCount)

    };



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