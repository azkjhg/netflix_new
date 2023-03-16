let initialize = {
popularMovies: {},
topRateMovies: {},
upComingMovies: {},
genreList: {},
loading:true,
fucking:null

}

function movieReducer(state=initialize,action){
    let {type, payload} = action
    
    switch(type){
        case "GET_MOVIES_REQUEST" :
            return {
            ...state
            }
        case "GET_MOVIES_SUCCESS" :
            return {
                ...state, popularMovies: payload.popularMovies, topRateMovies: payload.topRateMovies, upComingMovies:payload.upComingMovies,
                genreList: payload.genreList,
                loading:false
            
            }
        case "GET_MOVIES_FAILURE" :
            return {
                ...state
            }
        default:
            return {...state}
    };

}

export default movieReducer