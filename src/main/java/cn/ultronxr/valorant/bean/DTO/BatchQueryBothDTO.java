package cn.ultronxr.valorant.bean.DTO;

import lombok.Data;

/**
 * @author Ultronxr
 * @date 2023/04/23 10:38:28
 * @description
 */
@Data
public class BatchQueryBothDTO {

    private String date;

    private String skin1;

    private String skin2;

    private String skin3;

    private String skin4;

    private String bonusSkin1;

    private String bonusSkin2;

    private String bonusSkin3;

    private Integer current = 1;

    private Integer size = 100;

}
