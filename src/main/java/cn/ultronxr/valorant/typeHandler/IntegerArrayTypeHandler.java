package cn.ultronxr.valorant.typeHandler;

import cn.hutool.json.JSONUtil;
import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.MappedJdbcTypes;
import org.apache.ibatis.type.MappedTypes;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * @author Ultronxr
 * @date 2023/04/18 21:53:37
 * @description mybatis 自定义 typeHandler ：将SQL查询出来的 Integer数组字符串 转化为 Integer数组对象
 */
@MappedTypes({Integer[].class})
@MappedJdbcTypes({JdbcType.VARCHAR})
public class IntegerArrayTypeHandler extends BaseTypeHandler<Integer[]> {

    private static Integer[] l = new Integer[]{};


    @Override
    public void setNonNullParameter(PreparedStatement ps, int i, Integer[] parameter, JdbcType jdbcType) throws SQLException {
        ps.setString(i, JSONUtil.toJsonStr(parameter));
    }

    @Override
    public Integer[] getNullableResult(ResultSet rs, String columnName) throws SQLException {
        return JSONUtil.parseArray(rs.getString(columnName)).toArray(l);
    }

    @Override
    public Integer[] getNullableResult(ResultSet rs, int columnIndex) throws SQLException {
        return JSONUtil.parseArray(rs.getString(columnIndex)).toArray(l);
    }

    @Override
    public Integer[] getNullableResult(CallableStatement cs, int columnIndex) throws SQLException {
        return JSONUtil.parseArray(cs.getString(columnIndex)).toArray(l);
    }
}
