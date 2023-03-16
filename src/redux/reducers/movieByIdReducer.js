let initialize = {
    MoviesById:{},
    genreList: {},
    detailLoading: true

}

function movieByIdReducer(state=initialize,action){
    let {type, payload} = action
    switch(type){
        case "GET_MOVIES_REQUEST" :
            return {
            ...state
            }
        case "GET_MOVIES_SUCCESS" :
            return {
                ...state, 
                MoviesById: payload.MoviesById,
                genreList: payload.genreList,
                detailLoading: false
            }
        case "GET_MOVIES_FAILURE" :
            return {
                ...state
            }
        default:
            return {...state}
    };

}

export default movieByIdReducer