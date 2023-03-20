let initialize = {
    MoviesById:{},
    genreList: {},
    MovieReview: {},
    MovieRecommend: {},
    MoviePreview:{},
    detailLoading: true

}

function movieByIdReducer(state=initialize,action){
    let {type, payload} = action
    switch(type){
        case "GET_MOVIES_REQUEST" :
            return {
            ...state, detailLoading: true
            }
        case "GET_MOVIES_SUCCESS" :
            return {
                ...state, 
                MoviesById: payload.MoviesById,
                genreList: payload.genreList,
                MovieReview: payload.MovieReview,
                MovieRecommend: payload.MovieRecommend,
                MoviePreview: payload.MoviePreview,
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