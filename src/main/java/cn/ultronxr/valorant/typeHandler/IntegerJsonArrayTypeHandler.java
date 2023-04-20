package cn.ultronxr.valorant.typeHandler;

import cn.hutool.json.JSONUtil;
import com.alibaba.druid.support.json.JSONUtils;
import com.baomidou.mybatisplus.extension.handlers.AbstractJsonTypeHandler;

/**
 * @author Ultronxr
 * @date 2023/04/20 18:22:33
 * @description mybatis 自定义 typeHandler ：JDBC 与 Java 的 Integer JsonArray 互转
 */
public class IntegerJsonArrayTypeHandler extends AbstractJsonTypeHandler<Integer[]> {

    private static final Integer[] array = new Integer[]{};


    @Override
    protected Integer[] parse(String json) {
        return JSONUtil.parseArray(json).toArray(array);
    }

    @Override
    protected String toJson(Integer[] obj) {
        return JSONUtils.toJSONString(obj);
    }

}
