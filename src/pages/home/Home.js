import React,{useEffect,useReducer} from "react"
// import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// const Home = () => {
//     const [count,setCount] = useState(0)
//     const navigate = useNavigate()
//     useEffect(() => {
//         console.log('我被触发了')
    
//         return (() => {
//             console.log('我被清除了')
//         })
//     })
//     useEffect(() => {
//         console.log('我被调用1')
//     },[count])
//     useEffect(() => {
//         console.log('我被调用2')
//     })
//     return (
//         <>
//             <div>
//                 you clicked {count} time
//             </div>
//             <div onClick={() => setCount(count + 1)}>
//                 我是home
//             </div>
//             <div onClick={() => navigate("/login") }>跳转登陆页</div>
//         </>
//     )
// }
const Home = () => {
    const initialState = {count:0};
    const reducer = (state,action) => {
        switch(action.type){
            case "increment":
                return {count:state.count + 1}
            case "decrement":
                return {count:state.count - 1}
            default:
                throw new Error()
        }
    }
    const Counter = () => {
        const [state,dispatch] = useReducer(reducer,initialState)
        return (
            <>
                Count:{state.count}
                <button onClick={() => dispatch({type:"increment"})}>+</button>
                <button onClick={() => dispatch({type:"decrement"})}>-</button>
            </>
        )
    }
    return (
        <div>
            <Counter/>
        </div>
    )
}
export default Home