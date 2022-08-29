import { Actiontypes } from "../constants/Actiontypes";
const  initialState ={
    tokenResponse :[]
    }

export const SignupReducer = (state=initialState,{type,payload})=>
{
    switch(type)
    {
        case Actiontypes.SIGN_UP:
            return {...state,tokenResponse:payload};
        default:
            return state;    
    }
}


// {
//     email: "madhu@gmail.com",
//     expiresIn: "3600",
//     idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjUyZmEwZjE2NmJmZjZiODU5N2FjMGFlMDRlNTllZmYxOTk1N2MyYmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJvamVjdDEtNDNiZGEiLCJhdWQiOiJwcm9qZWN0MS00M2JkYSIsImF1dGhfdGltZSI6MTY2MTc2MzQyMiwidXNlcl9pZCI6IkI4YW9lMGg5bkpXZTNCbTR5YTUxTjFIZHVZRDMiLCJzdWIiOiJCOGFvZTBoOW5KV2UzQm00eWE1MU4xSGR1WUQzIiwiaWF0IjoxNjYxNzYzNDIyLCJleHAiOjE2NjE3NjcwMjIsImVtYWlsIjoibWFkaHVAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1hZGh1QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bXXAh2KeNYGzZw6yRMiherdGyOAL4RKd4tC9SVgUnrQtEh3lYqQy5XjW0P165_tBRWcSZWas1emjlea3g_OifHEdDkVanSMv3RvBegKjeZ1k1mFQQwPCx7bTd--CVSPfIQc0lDJz5CpOt9gvVwl5MPA0DXoprANtCULIz68iIysrY49UwBpMZu6wS5G1mtBDAOxfPB0yZGwnlXxq5Cr1ArBdhmOuGLNOarB8bZ1y6bn2CStpb6mgvysDtbNyJKnwZOKqEpJ0CXzaIn_lZtMk8Pm9XONJf8i9x-cSwdIKET4U2W-0g9QtogFcVC8D_pDrdV0ki22YZdrAscSdwrbX8Q",
//     kind: "identitytoolkit#VerifyPasswordResponse",
//     localId: "B8aoe0h9nJWe3Bm4ya51N1HduYD3",
//     refreshToken: "AOEOulb9XDFO2DBoMrFIk0q4DZ-ZHYH9K47laDt98wJ_ojUnGCBadytgYnik1Ez8qK8knsx5CfowpKeZCzKFuKSqBkYSGBMsPN7RGPrCsRNmevIwdcMyvHFDFbLKwtOse8XqwlCBeK0QGxVhdwAWRrG6WFQVamn3jch5hQIUe1Rfxe5XJn-6y8CTh8jMN1VUNZza_Hji3TVfPcr9yhHg_W3OJHiX6scsQA"
// }]