const most = (blogs) => {
    const number = Math.max(...blogs._map((currentBlog) => currentBlog.blogs))
    return blogs._filter((currentNumber) => currentNumber.blogs === number);
}

module.exports = {
    most
}