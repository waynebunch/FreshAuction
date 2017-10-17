const fs = require('fs')
const axios = require('axios')

exports.siteName = 'emptyArray'

exports.test = () => {
    console.log('test')
}

exports.menu = [
    { slug: '/', title: 'Home', icon: 'svg/004-home.svg'},
    { slug: '/tutorials', title: 'Tutorials', icon: 'svg/003-educational-video.svg'},
    { slug: '/services', title: 'Services', icon: 'svg/001-settings-tools.svg'},
    { slug: '/contact', title: 'Contact', icon: 'svg/speech-bubble.svg'}
]

exports.whatImDoing = [
    { url: '/blog/beginning', 
    title: 'emptyArray From Scratch', 
    description: 'Decided to build it from scratch',
    long: 'sadlkjfslkdajfjsda;kfjsdkaljfljsadlkfjsld;fj;lsdajfkjas;fjsakldjf;sadf',
    date: 'Today'}
]

exports.newsFeed = axios.get(process.env.NEWSURL)
    .then(response => {
        const articles = response.data.articles
        const finishedArticles = []
        articles.forEach(element => {
            finishedArticles.push({
                author: element.author,
                title: element.title,
                description: element.description,
                url: element.url,
                urlToImage: element.urlToImage,
                publishedAt: element.publishedAt
            })
        })
        return finishedArticles
    })
    .then(data => {
        exports.articles = data
    })
    .catch(err => {
        console.log(err)
    })

