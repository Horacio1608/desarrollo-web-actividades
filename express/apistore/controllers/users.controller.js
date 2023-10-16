//controler se encarga de la parte logica

/*
@params req => url dinamicas, query params, body params only(post, put, patch)
@params res => respuesta del servidor al cliente (201: created), 409 conflicto en el registro y etc.
*/

const getAll = async(req,res)=>{
    //consulta a bd de all products
    let filterP = products;
    if(req.query.name){
        filterP = products.filter((person)=>{
            return person.name.toLoweCase().includes(req.query.name.toLoweCase())
        })
    }
    res.json({data:'GET ALL'})
}

const createUser = async(req,res)=>{
    //parametros por el body
    console.log(req.body);
    res.json({data:'METHOD POST'})
}

const deleteUser = async(req,res)=>{
    res.json({data:'METHOD DELETE'})
}

const findFilter = async(req,res)=>{
    //consulta por id
    let product = products.filter((product)=>{return product.id == req.params.id});
    //router dinamic(params)=>object
    console.log(req.params);
    //query params (query)=> object
    console.log(req.query)

    res.json({data:'GET FILTER', values:req.params, query:req.query})
}


module.exports={getAll,createUser,deleteUser,findFilter};
