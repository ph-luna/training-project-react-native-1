function idGen () {
    const dateTime = new Date().getTime()
    const id = dateTime * (Math.random() * (10 - 1) + 1).toFixed(0)
    return id
}

export default idGen