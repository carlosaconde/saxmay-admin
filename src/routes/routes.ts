import LoginPage from "../pages/LoginPage"




type JSXComponent = () => JSX.Element

interface Route{
    to:string
    path:string
    Component: JSXComponent
    name:string
}

export const routes:Route[]=[
    {
     to:"/login",
    path:"login",
    Component:LoginPage,
    name:"login-page",   
    }
    
]