import { CATEGORIES } from '../../data/categories'
import { SELECTED_CATEGORY } from '../actions/category.action'

const initialState = {
    categories: CATEGORIES,
    selected: null
}

// cuando se presione una categoría se va a hacer dispatch de la action selectedCategory, que toma como parámetro el id de la categoría y lo ingresa en la prop categoryId.
// a su vez va a ejecutar éste reducer, dónde si el action.type es igual a SELECTED_CATEGORY (la categoría seleccionada) crea el IndexCategory, y si la misma es -1, quiere decir que la category no existe y devuelve el state inicial
// pero si existe devuelve el state inicial modificando el selected y asignandole la categoría presionada, ya no va a ser null.
const CategoryReducer = (state = initialState, action ) => {
    if (action.type = SELECTED_CATEGORY) {
        const IndexCategory = state.categories.findIndex(
            cat => cat.id === action.categoryId
        )
        if (IndexCategory === -1) {
            return state
        } else {
            return {...state, selected: state.categories[IndexCategory]}
        }
    } else {
        return state
    }
}

export default CategoryReducer;
