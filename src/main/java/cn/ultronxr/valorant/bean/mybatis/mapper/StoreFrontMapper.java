package cn.ultronxr.valorant.bean.mybatis.mapper;

import cn.ultronxr.valorant.bean.VO.BatchBothStoreFrontVO;
import cn.ultronxr.valorant.bean.VO.BatchStoreFrontVO;
import cn.ultronxr.valorant.bean.mybatis.bean.StoreFront;
import com.github.jeffreyning.mybatisplus.base.MppBaseMapper;
import org.apache.ibatis.annotations.Param;

import java.util.LinkedList;
import java.util.List;

/**
 * @author Ultronxr
 * @date 2023/02/22 10:20
 * @description
 */
public interface StoreFrontMapper extends MppBaseMapper<StoreFront> {

    List<BatchStoreFrontVO> batchQuerySingle(@Param("date") String date, @Param("displayName") String displayName);

    List<BatchStoreFrontVO> batchQueryBonus(@Param("date") String date, @Param("displayName") String displayName);

    LinkedList<BatchBothStoreFrontVO> batchQueryBoth(@Param("date") String date,
                                                     @Param("skin1") String skin1, @Param("skin2") String skin2, @Param("skin3") String skin3, @Param("skin4") String skin4,
                                                     @Param("bonusSkin1") String bonusSkin1, @Param("bonusSkin2") String bonusSkin2, @Param("bonusSkin3") String bonusSkin3
                                );

}
