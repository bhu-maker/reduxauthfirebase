import { Actiontypes } from "../constants/Actiontypes"
export const SignupAction = (tokenResponse)=>{
    return  {
        type : Actiontypes.SIGN_UP,
        payload : tokenResponse,
    };
}