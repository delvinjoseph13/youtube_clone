import { userLogin, userRegister } from "../controllers/userLoginReg.controller.js";
import { upload } from "../middleware/upload.js";



function UserLoginRoute(app){
   app.post("/register",upload.single('avatar'),userRegister)
   app.post("/login",userLogin)
}

export default UserLoginRoute;