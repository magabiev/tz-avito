/**
 * Основной стейт, содержащий сотояния данных, загрузки данных, видимости всплывающего окна,
 * @type {{popUpLoading: boolean, popUpItem: [], popUpImgId: number, loading: boolean, popUpVisible: boolean, items: []}}
 */
const initialState = {
  loading: true,
  items: [],
  popUpVisible: false,
  popUpLoading: true,
  popUpItem: [],
};

/**
 * Основной редюсер содержащий в себе кейсы загрузки, вывода и скрытия всплывающего окна.
 * @param state
 * @param action
 * @returns {{popUpLoading: boolean, popUpItem: *[], popUpImgId: number, loading: boolean, popUpVisible: boolean, items: *}|{popUpLoading: boolean, popUpItem: *, popUpImgId: number, loading: boolean, popUpVisible: boolean, items: *[]}|{popUpLoading: boolean, popUpItem: *[], popUpImgId: number, loading: boolean, popUpVisible: boolean, items: *[]}}
 */
export default function reducer (state = initialState, action) {
  switch (action.type){
    case "loading":
      return{
        ...state,
        loading: true,
      }
    case "loading_success":
      return {
        ...state,
        loading: false,
        items: action.payload,
      }
    case 'loading_popUp_img':
      return {
        ...state,
        popUpLoading: true,
        popUpVisible: true,
      }
    case 'modal_on':
      return {
        ...state,
        popUpItem: action.payload,
        popUpLoading: false,

      }
    case 'popUp_hide':
      return {
        ...state,
        popUpVisible: false,
      }
    default:
      return state;
  }
}
