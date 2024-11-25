const helloWorld = (req,res) => {
    res.send("<h1>Hello World!!</h1>")
}

const myObject = {
    "login": "shahzaibalijamro",
    "id": 153917989,
    "node_id": "U_kgDOCSyaJQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/153917989?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/shahzaibalijamro",
    "html_url": "https://github.com/shahzaibalijamro",
    "followers_url": "https://api.github.com/users/shahzaibalijamro/followers",
    "following_url": "https://api.github.com/users/shahzaibalijamro/following{/other_user}",
    "gists_url": "https://api.github.com/users/shahzaibalijamro/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/shahzaibalijamro/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/shahzaibalijamro/subscriptions",
    "organizations_url": "https://api.github.com/users/shahzaibalijamro/orgs",
    "repos_url": "https://api.github.com/users/shahzaibalijamro/repos",
    "events_url": "https://api.github.com/users/shahzaibalijamro/events{/privacy}",
    "received_events_url": "https://api.github.com/users/shahzaibalijamro/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Shahzaib Ali",
    "company": null,
    "blog": "",
    "location": "Karachi, Pakistan.",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 53,
    "public_gists": 0,
    "followers": 6,
    "following": 4,
    "created_at": "2023-12-15T12:27:30Z",
    "updated_at": "2024-10-18T15:56:28Z"
}

const sendObject = (req,res) => {
    res.json(myObject)
}
export {helloWorld,sendObject}