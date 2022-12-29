import React, { useContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";
import HomeImg from "../../public/images/IMG_20221228_151627.jpg"
import AboutImg from "../../public/images/IMG_20221228_214818.jpg"

const AppContext = React.createContext();

const initialState = {
    firstPara: '',
    secondPara: '',
    name: '',
    image: '',
    cards: [],
    isLoading: ''
}

const API = 'https://wild-pink-marlin-vest.cyclic.app/service'

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const getValue = async (url) => {

        dispatch({
            type: "GET_LOADPAGE",
            toLoad: {
                isLoading: true
            }
        })

        try {
            const res = await fetch(url)
            const data = await res.json()
            dispatch({
                type: "GET_SERVICEPAGE",
                toLoad: {
                    cards: data,
                    isLoading: false
                }
            })


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        getValue(API);
    }, [])


    const homePage = () => {
        dispatch({
            type: "GET_HOMEPAGE",
            toLoad: {
                firstPara: 'Hello, My name is',
                secondPara: 'I am a Web developer!',
                name: 'Md kaif ansari',
                image: HomeImg

            }
        })
    }
    const aboutPage = () => {
        dispatch({
            type: "GET_ABOUTPAGE",
            toLoad: {
                firstPara: 'I create successful responsive websites that are fast, easy to use, and build with best practices.',
                secondPara: 'The main area of my expertise is front-end development.',
                name: 'front-end developer',
                image: AboutImg

            }
        })
    }


    return <AppContext.Provider value={{ ...state, homePage, aboutPage }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext };