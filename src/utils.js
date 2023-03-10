import axios from 'axios';

const github = axios.create({
    baseURL:"https://api.github.com/search/repositories?q=created:>2023-02-10&sort=stars&order=desc",
    timeout:15000
});

export { github };


const commits = axios.create({
    baseURL:"https://api.github.com/repos/",
    timeout:15000
});

export { commits }
