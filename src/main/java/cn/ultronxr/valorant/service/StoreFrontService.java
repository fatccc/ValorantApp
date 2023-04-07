package cn.ultronxr.valorant.service;

import cn.ultronxr.valorant.bean.VO.BatchStoreFrontVO;
import cn.ultronxr.valorant.bean.VO.StoreFrontVO;
import cn.ultronxr.valorant.bean.mybatis.bean.StoreFront;
import com.github.jeffreyning.mybatisplus.service.IMppService;

import java.util.List;

/**
 * @author Ultronxr
 * @date 2023/02/22 10:20
 * @description
 */
public interface StoreFrontService extends IMppService<StoreFront> {

    /**
     * 获取每日刷新的商店
     * @param userId 拳头账户ID
     * @param date   日期
     * @return 商品列表
     */
    List<StoreFront> singleItemOffers(String userId, String date);

    /**
     * 获取夜市商品
     * @param userId 拳头账户ID
     * @param date   日期
     * @return 商品列表
     */
    List<StoreFront> bonusOffers(String userId, String date);

    /**
     * 查询出每个商品对应的 武器皮肤、升级、炫彩 列表，并包装成 VO 对象返回给前端做数据展示
     * @param storeFrontList 商品列表
     * @return 包装成 VO 的商品列表
     */
    List<StoreFrontVO> toVO(List<StoreFront> storeFrontList);

    /**
     * 批量更新所有账号的每日商店
     * @return 商品列表
     */
    boolean batchUpdateSingle();

    /**
     * 批量更新所有账号的夜市数据
     * @return 商品列表
     */
    boolean batchUpdateBonus();

    /**
     * 查询所有账号的每日商店，是否在指定日期存在指定的皮肤
     * @return 商品列表
     */
    List<BatchStoreFrontVO> batchQuerySingle(String date, String displayName);

    /**
     * 查询所有账号的夜市，是否在指定日期存在指定的皮肤
     * @return 商品列表
     */
    List<BatchStoreFrontVO> batchQueryBonus(String date, String displayName);

}
