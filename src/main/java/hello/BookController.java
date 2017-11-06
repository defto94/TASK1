/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hello;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author defto
 */
@Controller
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    @RequestMapping("/books")
    public String booksList(Model model) {
        model.addAttribute("books", bookRepository.findAll());
        return "books";
    }

    @RequestMapping(path = "/deleteBook/{id}")
    public @ResponseBody
    String delete(@PathVariable("id") Long id) {
        Book n = bookRepository.findOne(id);
        bookRepository.delete(n);
        return "Deleted";
    }

    @GetMapping(path = "/addBook")
    public @ResponseBody
    String addNewUser(@RequestParam String title, @RequestParam String author, @RequestParam User userID) {

        Book n = new Book();
        n.setTitle(title);
        n.setAuthor(author);
        n.setUserID(userID);
        bookRepository.save(n);
        return "Saved";
    }

    @GetMapping(path = "/updateBook") // Map ONLY GET Requests
    public @ResponseBody
    String updateBook(@RequestParam Long id, @RequestParam String title, @RequestParam String author, @RequestParam User userID) {

        Book n = bookRepository.findOne(id);
        n.setTitle(title);
        n.setAuthor(author);
        n.setUserID(userID);
        bookRepository.save(n);
        return "Updated";
    }
}
