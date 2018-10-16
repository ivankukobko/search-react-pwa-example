export default {
  api_url: 'https://api.github.com/search/users?q=',
  default_headers: {
    "User-Agent": "Awesome-Octocat-App",
    "Accept": "application/vnd.github.v3+json"
  },

  mappings: {
    title: 'login',
    description: 'description',
    url: 'html_url',
    image_url: 'avatar_url',
  },
}
