import { createContext, useContext, useReducer } from "react";

export const BookContext = createContext();

export const BookContextProvider = ({children}) => {
   const initialState = [
       {id:1,title:'Retire Young, Retire Rich' , auther:'Robert T kiosaki'},
       {id:2,title:'Rich dad,Poor dad' , auther:'Robert T kiosaki'}
   ];

   const reducer = (state,action) => {
      switch (action.type) {
         case 'Add_Book' :
            return [...state,{
               id:Math.floor(Math.random()*100),
               title:action.book.title,
               auther:action.book.auther}];
         case 'Remove_Book' :
            return state.filter(book => book.id != action.id);
         default :
            return state;
      } 
   }
      const [state,dispatch] = useReducer(reducer,initialState)
     const data = {state,dispatch}

     return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
     )
};

 export const useBookContext = () => useContext(BookContext);