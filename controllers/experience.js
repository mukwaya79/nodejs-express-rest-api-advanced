const Experience = require('../model/Experience')



exports.getexperience = async(req,res,next) =>{
   try {
       const experience = await Experience.find()
       if(!experience) {
           res.status(200).json({
               success:true,
               data:{}
           })
       }
      return res.status(200).json({
           success:true,
           count:Experience.length,
           data:experience
        })
     
   } catch (err) {

   return res.status(500).json({
        success:false,
        error:'server error'})
   }
}

exports.addexperience = async(req,res,next) =>{
    const { title,story,selected } = req.body
  try {
      const items = await Experience.create(req.body)
     
      res.status(201).json({
          success:true,
          data:items
      })
      if(!items) {
        
      return  res.status(200).json({
            success:true,
            data:{}
        })
  }
     
  } catch (error) {
      res.status(500).json({
        success:false,
        error:'server error'})
  }

}

exports.deleteexperience = async(req,res,next) =>{
    try {
        const items = await Experience.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success:true,
            count:Experience.length,
            data:items
         })

    } catch (error) {
        res.status(500).json({
            success:false,
            error:'server error'})
    }
    

}

exports.updateexperience = async(req,res,next) =>{
    try {
        const items = await Experience.findByIdAndUpdate(req.params.id,req.body)
        return res.status(200).json({
            success:true,
            count:Experience.length,
            data:items
         })

    } catch (error) {
        res.status(500).json({
            success:false,
            error:'server error'})
    }
    



}
