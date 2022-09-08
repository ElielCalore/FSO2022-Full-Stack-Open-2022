const favorite = (blogs) => {
    const number = Math.max(...blogs.map((currentBlog) => currentBlog.likes));
    return blogs.filter((currentNumber) => currentNumber.likes === number);
}

module.exports = {
  favorite
}