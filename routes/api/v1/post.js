// const express= require('express');
// const router=express.Router();
// const postapi=require('../../../controllers/api/v1/post_api');
// router.use('/',postapi.index);
// router.delete('/:id',postapi.destroy);
// module.exports=router;



const express = require('express');

const router = express.Router();
const postsApi = require("../../../controllers/api/v1/post_api");


router.get('/', postsApi.index);
router.delete('/:id', postsApi.destroy);



module.exports = router;