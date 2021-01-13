package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.view.RedirectView;

@RestController
public class HelloController {

    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @GetMapping(value = "/cas")
    public String test(@RequestParam String service) {
        System.out.println(service);
        return "";
    }

    @GetMapping(value = "/redirect")
    public RedirectView redirect(@RequestParam String service) {
        System.out.println(service);
        RedirectView view = new RedirectView();
        view.setUrl(service);
        return view;

    }

}
