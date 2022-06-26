export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://endearing-kitten-74c77c.netlify.app/"

const client_id = "168b94d31e7d4f37a8d643c48848e5ac"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]

//  #access_token=BQDN-WmB3bke58uZARhw7BVOZNkNfp7B_3Z1Ve4hIxRkwN0-12gRLevP179t0rXFWvwdGizCMXlvLidgdCnXGJTCSauuaBLaYEwFEohIg_DCblQoV4ueVqMqJh_9sHaf1u5GZp1g4aToWCb0HzmLOzNenAYeFdrXWvd9ZNdfjsjI3uV49KinOzgYaPZwshAHge_ym3q-GgO6zqVyGQ&token_type=Bearer&expires_in=3600
export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item) => {
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial
    },{})
}

export const loginUrl = `${authEndPoint}?client_id=${client_id}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
