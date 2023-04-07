package cn.ultronxr.valorant.bean.mybatis.mapper;

import cn.ultronxr.valorant.bean.VO.BatchStoreFrontVO;
import cn.ultronxr.valorant.bean.mybatis.bean.StoreFront;
import com.github.jeffreyning.mybatisplus.base.MppBaseMapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @author Ultronxr
 * @date 2023/02/22 10:20
 * @description
 */
public interface StoreFrontMapper extends MppBaseMapper<StoreFront> {

    List<BatchStoreFrontVO> batchQuerySingle(@Param("date") String date, @Param("displayName") String displayName);

    List<BatchStoreFrontVO> batchQueryBonus(@Param("date") String date, @Param("displayName") String displayName);

}
