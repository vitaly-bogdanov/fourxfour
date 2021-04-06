type TAction<T, P> = {
  type: T,
  payload: P
}

export default TAction;