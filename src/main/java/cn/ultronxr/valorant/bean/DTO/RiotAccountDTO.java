package cn.ultronxr.valorant.bean.DTO;

import lombok.Data;

/**
 * @author Ultronxr
 * @date 2023/04/22 11:47:36
 * @description
 */
@Data
public class RiotAccountDTO {

    private String username;

    private String userId;

    private Integer current = 1;

    private Integer size = 100;

}
