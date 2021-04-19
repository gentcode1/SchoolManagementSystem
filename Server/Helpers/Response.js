class  Response{
    static successMessage=(res, message, data, status)=>{

    res.status(status).json(
        data ?
        {
            status:status,
            message,
            data

    }:{
        status:status,
        message

    });
    }
    static errorMessage=(res, error, status)=>{
        res.status(status).json({

            status:status,
            error
        });
    }
}
export default Response;