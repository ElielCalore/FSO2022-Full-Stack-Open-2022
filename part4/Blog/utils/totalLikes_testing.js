const totalLikes = (blogs) => {
    const likes = blogs.map((currentBlog) => currentBlog.likes);
    return likes.reduce((accumulator, currentLike) => accumulator + currentLike );
}

module.exports = {
  totalLikes
}
