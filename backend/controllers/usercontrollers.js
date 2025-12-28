export const userView = async (req,res) =>{
    try {
        const respuesta = await fetch(process.env.DB)
        const data = await respuesta.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message:'eee',erros:error.message});
    }
}