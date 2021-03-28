const { JSON } = window

const serialize = (state, replacer, space) => {
    return JSON.stringify(state, replacer, space)
}

export default serialize
