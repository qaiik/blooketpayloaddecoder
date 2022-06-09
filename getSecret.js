let getValues = () => new Promise((b, c) => {
    try {
        let a = window.webpackJsonp.map(a => Object.keys(a[1]).map(b => a[1][b])).reduce((a, b) => [...a, ...b], []).find(a => /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/.test(a.toString()) && /\(new TextEncoder\)\.encode\(\"(.+?)\"\)/.test(a.toString())).toString();
        b({
            blooketBuild: a.match(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/)[0],
            secret: a.match(/\(new TextEncoder\)\.encode\(\"(.+?)\"\)/)[1]
        })
    } catch {
        c("Could not fetch auth details")
    }
})
