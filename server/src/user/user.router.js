 
import express from "express";
import catchErrors from "express-catch-errors";
import {  check , create , remove , list , update , view } from "./user.controller";
 

const router = express.Router(); 
router
  .route('/')
  .get(catchErrors(list))
  .post(catchErrors(create));

router
  .route('/:id')
  .get(catchErrors(check), catchErrors(view))
  .put(catchErrors(check), catchErrors(update))
  .delete(catchErrors(check), catchErrors(remove));

module.exports = router;
