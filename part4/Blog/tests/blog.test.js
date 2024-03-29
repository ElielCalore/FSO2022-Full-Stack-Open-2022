const mongoose = require("mongoose")
const supertest = require("supertest")
const app = require("../index")
const Blog = require("../models/blog.model")

const api = supertest(app)


describe('Async/await test', () => {
  test("GET route and JSON tests - exercise 4.8", async () => {
    await api.get("/blogs/read")
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

  test("The unique identifier property is named id - exercise 4.9*", async () => {
    const blogs = await Blog.find({});
    expect(blogs[0]._id).toBeDefined()
  })

  test("POST route test - exercise 4.10", async () => {
    const newPost = {
        title: "test",
        author: "test",
        url: "test",
        likes: 50
    }
    await (await api.post("/blogs/create")).send(newPost).expect(201)
  })

  test('If likes, title or url are missing, respond with 400 bad request - exercises 4.11*, 4.12*', async () => {
    const newBlog = {
      author:"Eliel",
      likes: 15
    }

    await api
      .post('/blogs/create')
      .send(newBlog)
      .expect(400)
  }, 90000)

  test("Delete route test- exercise 4.13*", async () => {
    const blogs = await Blog.find({});
    await api.delete(blogs[0]._id);
    expect(201)
  })

  test("Update route test - exercise 4.14", async () => {
    const blogs = await blogs.findOneAndUpdate({
      author:"Eliel",
      likes: 15
    }).expect(201)


  })


  
})

/*
const listLikes = require('../utils/totalLikes_testing').totalLikes
const listFavorite = require('../utils/favorite_testing').favorite
const listMost = require('../utils/mostBlog.testing').most
*/
/*
describe('total likes: ', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  const blogs = [
    {
      _id: "5a422a851b54a676234d17f7",
      title: "React patterns",
      author: "Michael Chan",
      url: "https://reactpatterns.com/",
      likes: 7,
      __v: 0
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0
    },
    {
      _id: "5a422b3a1b54a676234d17f9",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 12,
      __v: 0
    },
    {
      _id: "5a422b891b54a676234d17fa",
      title: "First class tests",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
      likes: 10,
      __v: 0
    },
    {
      _id: "5a422ba71b54a676234d17fb",
      title: "TDD harms architecture",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
      likes: 0,
      __v: 0
    },
    {
      _id: "5a422bc61b54a676234d17fc",
      title: "Type wars",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
      likes: 2,
      __v: 0
    }  
  ]

  const blogsF = [
    {
      title: "React patterns",
      author: "Michael Chan",
      likes: 7
    },
    {
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      likes: 5
    },
    {
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      likes: 12
    },
    {
      title: "First class tests",
      author: "Robert C. Martin",
      likes: 10
    },
    {
      title: "TDD harms architecture",
      author: "Robert C. Martin",
      likes: 0
    },
    {
      title: "Type wars",
      author: "Robert C. Martin",
      likes: 2
    }  
  ]

  const blogsM = [
    {
      author: "Michael Chan",
      blogs: 7
    },
    {
      author: "Edsger W. Dijkstra",
      blogs: 17
    },    
    {
      author: "Robert C. Martin",
      blogs: 12
    }
     
  ]

  test('when list has only one blog, equals the likes of that', () => {
    const result = listLikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  test('when list has more then one blog, equals the likes of that', () => {
    const result = listLikes(blogs)
    expect(result).toBe(36)
  })

  test('when list has more then one blog, equals the likes of that', () => {
    const result = listFavorite(blogsF)
    expect(result).toEqual([{
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      likes: 12
    }])

    test('when the author has more than one blog, it is equal to this one', () => {
      const result =  listMost(blogsM)
      expect(result).toEqual({
      author: "Edsger W. Dijkstra",
      blogs: 12
      })
    })
    
    
  })
})
*/
