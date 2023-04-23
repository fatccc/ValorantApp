package cn.ultronxr.valorant.bean.mybatis.mapper;

import cn.ultronxr.valorant.bean.DTO.BatchQueryBothDTO;
import cn.ultronxr.valorant.bean.VO.BatchBothStoreFrontVO;
import cn.ultronxr.valorant.bean.mybatis.bean.StoreFront;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.github.jeffreyning.mybatisplus.base.MppBaseMapper;
import org.apache.ibatis.annotations.Param;

/**
 * @author Ultronxr
 * @date 2023/02/22 10:20
 * @description
 */
public interface StoreFrontMapper extends MppBaseMapper<StoreFront> {

    /**
     * 同时查询每日商店和夜市的数据
     * @return 查询结果list中，同一个账号的两条数据总是相连，且每日商店数据在夜市数据前面
     */
    IPage<BatchBothStoreFrontVO> batchQueryBoth(@Param("page") IPage<BatchBothStoreFrontVO> page, @Param("batchQueryBothDTO") BatchQueryBothDTO batchQueryBothDTO);

    /**
     * 判断当前日期，夜市是否处于关闭状态
     * @param date 日期字符串
     * @return 夜市关闭 - true；夜市开放 - false
     */
    default boolean isNightShopClosed(String date) {
        return this.selectCount(
                new QueryWrapper<StoreFront>()
                        .gt("date", date)
                        .eq("is_bonus", 1)
        ) == 0;
    }

    /**
     * 当夜市关闭时（需要调用 {@link #isNightShopClosed(String)} 方法手动判断），查询每日商店和夜市的数据，此时夜市的查询条件被忽略
     * @return 实际上只返回每日商店的查询结果
     */
    IPage<BatchBothStoreFrontVO> batchQueryBothWhileNightShopClosed(@Param("page") IPage<BatchBothStoreFrontVO> page, @Param("batchQueryBothDTO") BatchQueryBothDTO batchQueryBothDTO);

}
