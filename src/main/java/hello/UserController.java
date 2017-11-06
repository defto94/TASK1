package hello;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import hello.UserRepository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

@Controller    // This means that this class is a Controller
public class UserController {

    @Autowired // This means to get the bean called userRepository
    // Which is auto-generated by Spring, we will use it to handle the data
    private UserRepository userRepository;


    @GetMapping(path = "/add")
    public @ResponseBody
    String addNewUser(@RequestParam String name, @RequestParam String email) {

        User n = new User();
        n.setName(name);
        n.setEmail(email);
        userRepository.save(n);
        return "Saved";
    }

    @RequestMapping("/users")
    public String usersList(Model model) {
        model.addAttribute("users", userRepository.findAll());
        return "users";
    }

    @RequestMapping(path = "/delete/{id}")
    public @ResponseBody
    String delete(@PathVariable("id") Long id) {
        User n = userRepository.findOne(id);
        userRepository.delete(n);
        return "Deleted";
    }

    @GetMapping(path = "/update") // Map ONLY GET Requests
    public @ResponseBody
    String updateUser(@RequestParam Long id, @RequestParam String name, @RequestParam String email) {

        User n = userRepository.findOne(id);
        n.setName(name);
        n.setEmail(email);
        userRepository.save(n);
        return "Updated";
    }

}


    /*
	@GetMapping(path="/add") // Map ONLY GET Requests
	public @ResponseBody String addNewUser (@RequestParam String name
			, @RequestParam String email) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request

		User n = new User();
		n.getName();
		n.getEmail();
		userRepository.save(n);
		return "Saved";
	}
     */