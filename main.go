package main

import (
    "io"
    "log"
    "net/http"
    "fmt"
)

func main() {
    // Hello world, the web server

    helloHandler := func(w http.ResponseWriter, req *http.Request) {
        host, _ := req.URL.Query()["host"]
        fmt.Println(host)
        io.WriteString(w, "Hello, world!\n")
    }

    http.HandleFunc("/hello", helloHandler)
    log.Fatal(http.ListenAndServe(":8080", nil))
}
