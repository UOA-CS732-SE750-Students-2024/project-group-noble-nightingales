package uoa.nightingales.mysqldatabaseservicenode;

import jakarta.annotation.Resource;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import uoa.nightingales.mysqldatabaseservicenode.mappers.UserMapper;
import uoa.nightingales.mysqldatabaseservicenode.pojos.User;
import uoa.nightingales.mysqldatabaseservicenode.services.UserService;

@SpringBootTest
class MySqlDatabaseServiceNodeApplicationTests {

    @Resource
    private UserMapper userMapper;


    @Resource
    private UserService userService;

    @Test
    void contextLoads() {
    }

    @Test
    public void testUserMapper(){
        User user = userMapper.selectUserById(1);
        System.out.println(user);
    }

    @Test
    public void testInsertUser(){
        User user = new User();
        user.setUsername("James");
        user.setPassword("ghx");
        userService.insertUser(user);
    }
}
