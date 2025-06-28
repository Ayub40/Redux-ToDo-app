// 22-4 Redux middleware basics

const logger = (state) => (next) => (action) => {
    console.log(action.type);
    console.log("Previous State", state.getState());
    const result = next(action);
    console.info("Next State", state.getState());
    console.groupEnd();
    return result;

    // console.log(action);
    // return next(action);
}

export default logger;
