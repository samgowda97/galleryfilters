function Items({data}){
    return (
        <div className="row ">
        {
          data.map((value)=>{
           const {id, image} = value;
           return (
            <div className="col-sm-4 my-3 " key={id}>
             <div className="card bg-light text-center">
                 <img src={image} className="img-fluid" style={{height:"200px"}}/>
                 
            </div>
         </div>
           )
          })
        }

</div>
    )
}

export default Items;