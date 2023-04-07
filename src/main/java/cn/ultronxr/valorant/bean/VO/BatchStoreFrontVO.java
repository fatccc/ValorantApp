package cn.ultronxr.valorant.bean.VO;

import lombok.Data;

/**
 * @author Ultronxr
 * @date 2023/04/07 23:20:54
 * @description 用于批量查询商店数据的 bean ，仅包含精简之后的字段信息
 */
@Data
public class BatchStoreFrontVO {

    private String username;

    private String userId;

    private Boolean isBonus;

    private String date;

    private Integer cost;

    private Integer discountPercent;

    private Integer discountCost;

    private String displayName;

}
