const express=require('express')
const Mario= require('../model/marioModel')
const router=express.Router()

router.get('/',async(req,res)=>{
try {
    const character=await Mario.find()
    res.status(200).json(character)
} catch (error) {
    res.status(500).json({message:error.message})
}
})

router.get('/:id',async(req,res)=>{
    try {
      const character=await Mario.findById(req.params.id)  
      if(character){
        res.status(200).json(character)
      }
      else{
        res.status(500).json({message:'character not found'})
      }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
 
router.post('/mario',async(req,res)=>{
    const {name,weight}=req.body 
    console.log(req.body)
       if(!name || !weight){
        res.status(400).json({message:'name or weight is missing'})
       }
    try {
       const newCharacter= await Mario.create({name,weight})
       res.status(200).json(newCharacter)
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
})
router.patch('/mario/:id',async(req,res)=>{
    const {name,weight}=req.body
    if(!name || !weight){
        res.status(400).json({message:'name or weight is missing'})
       }
       try {
        const updateCharacter= await Mario.findByIdAndUpdate(req.params.id,{name,weight})
        if(updateCharacter){
            res.status(200).json(updateCharacter)
        }
        else{
            res.status(400).json({message:"character not found"})
        }
       } catch (error) {
        res.status(400).json({message:error.message})
       }
    })
// to delete  
// to delete  
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const deletedCharacter = await Mario.findByIdAndDelete(id);
      if (deletedCharacter) {
        res.json({ message: 'Character deleted' });
      } else {
        res.status(400).json({ message: 'ID not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
module.exports=router