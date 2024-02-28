export default [
    {
        "type": "folder",
        "children": [
            {
                "type": "file",
                "name": "index",
                "extension": "js",
                "content": `
                console.log("Hello World")
                `
            },
            {
                "type": "folder",
                "children": [
                    {
                        "type": "file",
                        "name": "main",
                        "extension": "ts",
                        "content": `
                console.log("Hello World main")
                `
                    },
                    {
                        "type": "file",
                        "name": "server",
                        "extension": "js",
                        "content": `
                console.log("Hello World server")
                `
                    }
                ]
            }
        ]
    }
]