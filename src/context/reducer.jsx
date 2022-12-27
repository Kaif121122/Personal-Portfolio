export const reducer = (state, action) => {

    switch (action.type) {
        case 'GET_HOMEPAGE':
            return {
                ...state,
                name: action.toLoad.name,
                image: action.toLoad.image,
                firstPara:action.toLoad.firstPara,
                secondPara:action.toLoad.secondPara
            }
        case 'GET_ABOUTPAGE':
            return {
                ...state,
                name: action.toLoad.name,
                image: action.toLoad.image,
                firstPara:action.toLoad.firstPara,
                secondPara:action.toLoad.secondPara
            }
        case 'GET_SERVICEPAGE':
            return {
                ...state,
                cards: action.toLoad.cards,
                isLoading:action.toLoad.isLoading
            }
            case 'GET_LOADPAGE':
                return {
                    ...state,
                    isLoading: action.toLoad.isLoading
                }



        default:
            return state;
    }
}