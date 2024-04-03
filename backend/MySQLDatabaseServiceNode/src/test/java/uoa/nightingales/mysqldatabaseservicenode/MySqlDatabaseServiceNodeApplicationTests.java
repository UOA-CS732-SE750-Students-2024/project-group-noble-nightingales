package uoa.nightingales.mysqldatabaseservicenode;

import jakarta.annotation.Resource;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import uoa.nightingales.mysqldatabaseservicenode.mappers.UserMapper;
import uoa.nightingales.mysqldatabaseservicenode.pojos.User;

@SpringBootTest
class MySqlDatabaseServiceNodeApplicationTests {

    @Resource
    private UserMapper userMapper;

    @Test
    void contextLoads() {
    }

    @Test
    public void testUserMapper(){
        User user = userMapper.selectUserById(1);
        System.out.println(user);
    }
}
