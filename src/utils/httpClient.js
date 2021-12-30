const API = "https://api.themoviedb.org/3"

export function get(path){
    return fetch(API + path, {
            headers:{
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjI1NGU5Y2YyZjc4YTQxNmUzODdjZjg3OWEzZDNmYyIsInN1YiI6IjYxYjQyNDM5ZWM0NTUyMDA0MjU3MjgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RthO-xCIIAXRHOQE7GZ5x_2zkzwxHKzD7Vb07gnz6eM",
                "Content-Type": "application/json;charset=utf-8",
            }
        }).then(result => result.json())
} 