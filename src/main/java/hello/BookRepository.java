/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hello;

import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author defto
 */
public interface BookRepository extends CrudRepository<Book, Long> {

}
