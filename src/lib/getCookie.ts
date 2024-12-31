
type Cookies = { [key: string]: string };
export default function getCookie(name: string, document:Document): string | undefined {
    const allCookies = document.cookie.split(";")
    const cookies:Cookies = {}
    allCookies.forEach(cookie => {
        const [name, value] = cookie.split("=")
        cookies[name.trim()]=value
    })
    return cookies[name]
} 