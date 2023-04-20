package cn.ultronxr.valorant.typeHandler;

import cn.hutool.json.JSONUtil;
import com.alibaba.druid.support.json.JSONUtils;
import com.baomidou.mybatisplus.extension.handlers.AbstractJsonTypeHandler;

/**
 * @author Ultronxr
 * @date 2023/04/20 18:22:33
 * @description mybatis 自定义 typeHandler ：JDBC 与 Java 的 String JsonArray 互转
 */
public class StringJsonArrayTypeHandler extends AbstractJsonTypeHandler<String[]> {

    private static final String[] array = new String[]{};


    @Override
    protected String[] parse(String json) {
        return JSONUtil.parseArray(json).toArray(array);
    }

    @Override
    protected String toJson(String[] obj) {
        return JSONUtils.toJSONString(obj);
    }

}
