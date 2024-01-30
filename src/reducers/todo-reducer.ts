import { Item } from "../components/todo-container/types"

type Action =
  | { type: "ADD"; payload: { item: Item } }
  | { type: "EDIT"; payload: { item: Item } }
  | { type: "COMPLETED"; payload: { item: Item } }
  | { type: "DELETE"; payload: { id: Item["id"] } }

export function todoReducer(state: Item[], action: Action) {
  switch (action.type) {
    case "ADD":
      return [action.payload.item, ...state]
    case "EDIT":
    case "COMPLETED": {
      const newItems = [...state]
      const index = newItems.findIndex(
        ({ id }) => action.payload.item.id === id
      )
      newItems.splice(index, 1, action.payload.item)
      return newItems
    }
    case "DELETE":
      return state.filter((item) => action.payload.id !== item.id)
    default:
      return state
  }
}
