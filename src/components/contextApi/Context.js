
import React ,{ useReducer, useEffect, useContext } from 'react';
import reducer from './Reducer';
const Api = 'https://hn.algolia.com/api/v1/search?';
const initialState ={
    isLoading: true,
    query: CSS,
    nbPages: 0,
    page: 0,
    hits: []
}
const AppContext = React.createContext();
const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    const fetchApiData = async(url)=>{
        dispatch({type: 'SET_LOADING'})
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({
                type: 'GET_STORIES',
                payload:{
                    hits: data.hits,
                    nbPages: data.nbPages
                }
            })

        }catch(err){
            console.log(err);
        }
    }
    const removePost =(post_id)=>{
        dispatch({
            type:"REMOVE_POST", payload:post_id
        })
    }

    const SearchPost =(searchQuery)=>{
        dispatch({
            type:'SEARCH_POST', 
            payload:searchQuery
        })
    }

    const getPrevPage= ()=>{
        dispatch({
            type:'PREV_PAGE'
        })
    }
    
    const getNextPage = ()=>{
        dispatch({
            type: 'NEXT_PAGE'
        })
    }

    useEffect(()=>{
        fetchApiData(`${Api}query=${state.query}&page=${state.page}`)            
    },[state.query, state.page])
    return(
        <>
        <AppContext.Provider value={{...state, removePost, SearchPost, getPrevPage, getNextPage}}>
            {children}
        </AppContext.Provider>
        </>
    )
}

const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppContext, AppProvider,useGlobalContext }