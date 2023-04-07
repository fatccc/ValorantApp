package cn.ultronxr.valorant;

import com.github.jeffreyning.mybatisplus.conf.EnableMPP;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author Ultronxr
 * @date 2023/04/07 14:28:09
 * @description
 */
@SpringBootApplication
@MapperScan(basePackages = {
        "cn.ultronxr.valorant.bean.mybatis.mapper",
})
@EnableMPP
public class ValorantApplication {

    public static void main(String[] args) {
        SpringApplication.run(ValorantApplication.class, args);
    }

}
