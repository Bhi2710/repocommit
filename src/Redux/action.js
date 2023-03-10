export const addRepo = (repo) => {
    return{
        type: "ADDREPOS",
        payload: repo,
    }
}