package cn.ultronxr.valorant.bean.VO;

import lombok.Data;

/**
 * @author Ultronxr
 * @date 2023/04/18 16:41:35
 * @description 用于批量查询每日商店+夜市数据的 bean ，仅包含精简之后的字段信息
 */
@Data
public class BatchBothStoreFrontVO {

    private String username;

    private String userId;

    private Boolean isBonus;

    private String date;

    private Integer[] costList;

    private Integer[] discountPercentList;

    private Integer[] discountCostList;

    private String[] displayNameList;

    // 用于把夜市数据合并到每日商店数据（两条数据合并为一条）
    private BatchBothStoreFrontVO bonusOffer;

}
