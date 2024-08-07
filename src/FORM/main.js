import React,{useState} from "react";
import "./style.css"

let Form=()=>{
    let [url,seturl]=useState();
    let [pname,setname]=useState();
    let [price,setprice]=useState();
    let [id,setid]=useState(1);

    ///storing the data into the array of object methods...
    let [array,setarray]=useState([])


    let handle=(e)=>{
        
        if (e.target.name==="url"){
            seturl(e.target.value)
        }
        else if(e.target.name==="pname"){
            setname(e.target.value)
        }
        else if(e.target.name==="prate"){
            setprice(e.target.value)
        }
    }
    let handleform=(e)=>{
        //do not refresh the page...
        e.preventDefault()
        
        //adding the id for the indivual object...
        setid(id+1)

        //we will create the obj and stored the object of the arrayofobject to fetch the data.... 
        let obj={
            link:url,
            imgname:pname,
            rate:price,
            idvalue:id
        }
        console.log(obj)

        setarray([...array,obj])

    }
    
    //style for the form 
    let css={
        padding:"5px 40px 5px 40px"
    }
    ///................................
    return(
        <div>
            <form style={{paddingLeft:"570px",paddingTop:"200px"}} onSubmit={handleform}>
                <input type="txt" placeholder="Enter the url" name="url" value={url} onChange={handle} style={css}></input>
                <br></br><br></br>
                <input type="txt" placeholder="Enter the product" name="pname" value={pname} onChange={handle} style={css}></input>
                <br></br><br></br>
                <input type="number" placeholder="Enter the price" name="prate" value={price} onChange={handle} style={css}></input>
                <br></br><br></br>
                <button style={{marginLeft:"60px",padding:"5px 40px 5px 40px"}}>Submit</button>
            </form>
            <div className="card-section">
                {
                    array.map((a,i)=>{
                        return(
                            <div key={i} className="cardi">
                                <img src={a.link} alt="img" style={{height:"250px",width:"300px"}}></img>
                                <h1>{a.imgname}</h1>
                                <h1>{a.rate}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Form;